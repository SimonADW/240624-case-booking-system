import style from "./BookingSearchResults.module.css"


const BookingSearchResults = ({searchResult}) => {
	return (
		<ul>
			{searchResult ? (
				searchResult.map((result, index) => {
					return <li className={style.searchListItem} key={index}>
						<span><img src="" alt="HotelRoomImage" /></span>
						<span>Roomnumber: {result.roomnum}</span>												
						<span>Room type: {result.category}</span>
						<button>Book Room</button>
					</li>
				})
			) : (
				<div>Enter booking details</div>
			)}
		</ul>
	);
};

export default BookingSearchResults;
