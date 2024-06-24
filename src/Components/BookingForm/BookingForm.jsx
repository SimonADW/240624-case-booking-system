import { useState } from "react";
import BookingSearchResults from "../BookingSearchResults/BookingSearchResults";
import style from "./BookingForm.module.css";

const BookingForm = () => {
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

	return (
		<>
			<form className={style.bookingForm} action="">
				<div>
					<label htmlFor="arrivaldate">Arrival Date</label>
					<input type="date" id="arrivaldate" value={formValues.arrivalDate} onChange={handleInputChange} />
				</div>
				<div>
					<label htmlFor="nights">Nights</label>
					<input type="number" id="nights" value={formValues.nights} onChange={handleInputChange} />
				</div>
				<div>
					<label htmlFor="category">Room Category</label>
					<select name="category" id="category" defaultValue={"singleroom1pax"}>
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
					<input type="num" id="roomnumber" value={formValues.roomnum} onChange={handleInputChange}/>
				</div>
				<div>
					<label htmlFor="firstname">First Name</label>
					<input type="text" id="firstname" value={formValues.firstname} onChange={handleInputChange}/>
				</div>
				<div>
					<label htmlFor="lastname">Last Name</label>
					<input type="text" id="lastname" value={formValues.lastname} onChange={handleInputChange}/>
				</div>
				<button>Search availability</button>
			</form>

			{/* <BookingSearchResults searchResult={searchResult} /> */}
		</>
	);
};

export default BookingForm;
