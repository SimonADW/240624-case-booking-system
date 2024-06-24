const BookingSearchResults = (searchResult) => {
	return (
		<ul>
			{searchResult ? (
				searchResult.map((result, index) => {
					return <li key={index}>
						<span>{result.roomnumber}</span>
						<span>{result.date}</span>
						<span>{result.nights}</span>
						<span>{result.category}</span>
					</li>
				})
			) : (
				<div>Enter booking details</div>
			)}
		</ul>
	);
};

export default BookingSearchResults;
