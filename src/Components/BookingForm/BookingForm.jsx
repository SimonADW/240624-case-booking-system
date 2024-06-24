import { useState } from "react";
import BookingSearchResults from "../BookingSearchResults/BookingSearchResults";
import style from "./BookingForm.module.css";

const BookingForm = () => {
	const [searchResult, setSearchResult] = useState([]);
  return (
	<>
		<form className={style.bookingForm} action="">
			<div>
				<label htmlFor="firstname">First Name</label>
				<input type="text" id="firstname"/>
			</div>
			<div>
				<label htmlFor="lastname">Last Name</label>
				<input type="text" id="lastname"/>
			</div>
			<div>
				<label htmlFor="arrivaldate">Arrival Date</label>
				<input type="date" id="arrivaldate" />
			</div>
			<div>
				<label htmlFor="nights">Nights</label>
				<input type="number" id="nights" defaultValue={1}/>
			</div>
			<div>
				<label htmlFor="category">Room Category</label>
				<select name="category" id="category">
					<option value="singleroom1pax">Single Room, 1 person</option>
					<option value="doubleroom2pax">Double Room, 2 persons</option>
					<option value="doubleroom1pax">Double Room, 1 person</option>					
				</select>
			</div>
			<div>
				<label htmlFor="roomnumber">Room</label>
				<input type="num" id="roomnumber" defaultValue={100}/>
			</div>

		</form>

		{/* <BookingSearchResults searchResult={searchResult} /> */}
	</>
  )
}

export default BookingForm