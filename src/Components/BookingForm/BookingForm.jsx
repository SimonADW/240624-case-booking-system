import { useState } from "react";
import BookingSearchResults from "../BookingSearchResults/BookingSearchResults";
import style from "./BookingForm.module.css";

const BookingForm = ({roomsArray}) => {
	const [searchResult, setSearchResult] = useState([]);	
	const [formValues, setFormValues] = useState({
		arrivalDate: "",
		nights: 1,
		category: "",
		roomnum: "",
		firstname: "",
		lastname: "",
	});

	const handleInputChange = (event)=> {
		const { name, value } = event.target;
		setFormValues({
			...formValues,
			[name]:value
		})		
	}

	
	const getSearchResult = ()=> {
		const { arrivalDate, roomnum } = formValues;		
		let availableRooms = [];

		// Get available rooms, if room is selected		
		if (formValues.roomnum) {
			// TODO: Fix filter-function: filtering out all room with a booking	 
			availableRooms = roomsArray.filter((room)=> {				
				return room.roomnum !== parseInt(roomnum) && 
				!room.bookings.some(booking => booking.dates.includes(arrivalDate.trim()))
			})			
		} else {
			availableRooms = roomsArray.filter((room)=> {
				return !room.bookings.some(booking => booking.dates.includes(arrivalDate.trim()))
			}) 			
		}
		return availableRooms
	}

	const handleSubmit = (event)=> {
		event.preventDefault()		
		setSearchResult(getSearchResult())	
	}

	

	return (
		<>
			<form className={style.bookingForm} onSubmit={handleSubmit} action="">
				<div>
					<label htmlFor="arrivaldate">Arrival Date<sup>*</sup></label>
					<input name="arrivalDate" type="date" id="arrivaldate" value={formValues.arrivalDate} onChange={handleInputChange} />
				</div>
				<div>
					<label htmlFor="nights">Nights<sup>*</sup></label>
					<input name="nights" type="number" id="nights" value={formValues.nights} onChange={handleInputChange} />
				</div>
				<div>
					<label htmlFor="category">Room Category<sup>*</sup></label>
					<select name="category" id="category" defaultValue={"singleroom1pax"} onChange={handleInputChange}>
						<option value="singleroom1pax">
							Single Room, 1 person
						</option>
						<option value="doubleroom2pax">
							Double Room, 2 persons
						</option>
						<option value="doubleroom1pax">
							Double Room, 1 person
						</option>
					</select>
				</div>
				<div>
					<label htmlFor="roomnumber">Room</label>
					<input name="roomnum" type="num" id="roomnumber" value={formValues.roomnum} onChange={handleInputChange}/>
				</div>
				<div>
					<label htmlFor="firstname">First Name<sup>*</sup></label>
					<input name="firstname" type="text" id="firstname" value={formValues.firstname} onChange={handleInputChange}/>
				</div>
				<div>
					<label htmlFor="lastname">Last Name<sup>*</sup></label>
					<input name="lastname" type="text" id="lastname" value={formValues.lastname} onChange={handleInputChange}/>
				</div>
				<button type="submit">Check availability</button>
			</form>

			<BookingSearchResults searchResult={searchResult} />
		</>
	);
};

export default BookingForm;
