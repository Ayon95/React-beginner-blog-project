import { useState, useEffect } from "react";

// this custom hook will fetch data and load data
function useFetch(url) {
	const [data, setData] = useState(null);
	const [fetchingData, setFetchingData] = useState(true);
	const [error, setError] = useState(null);

	// using the effect hook to fetch data after the first render
	// no need to worry about starting infinite loop due to changing state because we are using an empty dependency array
	useEffect(() => {
		const abortController = new AbortController();
		// fetching and loading data
		fetch(url, { signal: abortController.signal })
			.then((response) => {
				if (!response.ok) throw new Error(`Error ${response.status}: Could not get data ☹`);
				return response.json();
			})
			.then((data) => {
				setData(data);
				setFetchingData(false); // no longer fetching data
				setError(null); // if a subsequent fetch request is successful, then we want to make sure the error is not rendered
			})
			.catch((error) => {
				if (error.name === "AbortError") console.log("fetch aborted");
				else {
					setFetchingData(false);
					setError(error.message);
				}
			});

		// returning a cleanup function that will abort the effect when the component using it unmounts
		return () => abortController.abort();
	}, [url]); // setting url as a dependency for useEffect hook; it will fetch data from the corresponding url whenever the url changes

	return { data, fetchingData, error };
}

export default useFetch;
