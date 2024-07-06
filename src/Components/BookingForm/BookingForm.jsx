import { useCallback, useState } from "react";
import BookingSearchResults from "../BookingSearchResults/BookingSearchResults";
import style from "./BookingForm.module.css";
import { useForm } from "react-hook-form";

const BookingForm = ({ roomsArray }) => {
	const [searchResult, setSearchResult] = useState([]);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			arrivalDate: "",
			nights: 1,
			category: "singleroom1pax",
			roomnum: "",
			firstName: "",
			lastName: "",
		},
	});

	function getTodaysDate() {
		const todaysDate = new Date();
		const toDaysDateIsoString = todaysDate.toISOString().slice(0, 10);
		return toDaysDateIsoString;
	}

	getTodaysDate();

	const handleInputChange = (data) => {
		console.log(data);
	};

	// const getAvailableRooms = useCallback(
	// 	()=> {
	// 		const { arrivalDate, roomnum } = formValues;
	// 		let availableRooms = [];

	// 		// Get available rooms, if room is selected
	// 		if (formValues.roomnum) {
	// 			availableRooms = roomsArray.filter((room)=> {

	// 				return room.roomnum === parseInt(roomnum) &&
	// 				!room.bookings.some(booking => booking.dates.includes(arrivalDate.trim()))
	// 			})
	// 		} else {
	// 			availableRooms = roomsArray.filter((room)=> {
	// 				return !room.bookings.some(booking => booking.dates.includes(arrivalDate.trim()))
	// 			})
	// 		}
	// 		console.log(availableRooms);
	// 		return availableRooms
	// 	}, [formValues, roomsArray]
	// )

	// const handleSubmission = useCallback((data)=> {
	// 	event.preventDefault()
	// 	console.log(data);
	// 	setSearchResult(getAvailableRooms())
	// },[])

	const onSubmit = (data) => {
		console.log(data);
	};

	return (
		<>
			<form
				className={style.bookingForm}
				onSubmit={handleSubmit(onSubmit)}
				action=""
			>
				<div>
					<label htmlFor="arrivaldate">
						Arrival Date<sup>*</sup>
					</label>
					<input
						{...register("arrivalDate", {
							required: "Date is required",
						})}
						type="date"
						id="arrivaldate"
					/>
					<p>{errors.arrivalDate?.message}</p>
				</div>

				<div>
					<label htmlFor="nights">
						Nights<sup>*</sup>
					</label>
					<input
						{...register("nights", {
							required: "Please enter number of nights",
							min: {
								value: 1,
								message: "Please select minimum one night",
							},
						})}
						type="number"
						id="nights"
					/>
					<p>{errors.nights?.message}</p>
				</div>

				<div>
					<label htmlFor="category">
						Room Category<sup>*</sup>
					</label>
					<select {...register("category")} id="category">
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
					<input
						{...register("roomnum")}
						type="num"
						id="roomnumber"
					/>
				</div>

				<div>
					<label htmlFor="firstName">
						First Name<sup>*</sup>
					</label>
					<input
						{...register("firstName", {
							required: "First name is required",
						})}
						type="text"
						id="firstName"
					/>
					<p>{errors.firstName?.message}</p>
				</div>

				<div>
					<label htmlFor="lastname">
						Last Name<sup>*</sup>
					</label>
					<input
						{...register("lastName", {
							required: "Last name is required",
						})}
						type="text"
						id="lastname"
					/>
					<p>{errors.lastName?.message}</p>
				</div>
				<button type="submit">Check availability</button>
			</form>

			<BookingSearchResults searchResult={searchResult} />
		</>
	);
};

export default BookingForm;
