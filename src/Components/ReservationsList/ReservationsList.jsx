import style from "./ReservationList.module.css"

const ReservationsList = ({roomsArray}) => {
	const currentBookings = [];
	
	// Extract upcoming bookings from roomlist
	const todaysDate = new Date();
	const todayIsoDateWithoutDash = todaysDate.toISOString().split("T")[0].replace(/-/g, "");
	
	for(let room of roomsArray) {
		if(room.bookings.length > 0) {
			for (let booking of room.bookings) {
				// Only extract dates not passed
				const bookingDates = booking.dates.map((date)=> date)
				if (bookingDates.some(date => date >= todayIsoDateWithoutDash)) {
					const currentBooking = {
						firstname: booking.firstname,
						lastname: booking.lastname,
						pax: booking.pax,
						nights: booking.dates.length -1,
						dates: `${booking.dates}`,
						roomnum: room.roomnum,
						category: room.category
					}
					currentBookings.push(currentBooking);	
				}
			}
		}
	}

  return (
	// Render all bookings (if any)
	<ul>			
		{currentBookings.length > 0 ? currentBookings.map((booking)=> {
			return <li className={style.listElement} key={booking.roomnum}>
					<div><span>First name:</span> {booking.firstname}</div>
					<div><span>Last name:</span> {booking.lastname}</div>
					<div><span>Pax:</span> {booking.pax}</div>
					<div><span>Nights:</span> {booking.nights}</div>
					<div><span>Dates:</span>{booking.dates}</div>
					<div><span>Room number:</span> {booking.roomnum}</div>
					<div><span>Category:</span> {booking.category}</div>
				</li>
		}) : <h3>No bookings</h3> }
	</ul>
  )
}

export default ReservationsList