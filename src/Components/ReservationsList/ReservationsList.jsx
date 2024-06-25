import style from "./ReservationList.module.css"

const ReservationsList = ({roomsArray}) => {
	const currentBookings = [];
	
	// Extract upcoming bookings from roomlist
	const todaysDate = new Date();
	const todayIsoDateWithoutDash = todaysDate.toISOString();
	
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
		<li className={`${style.listElement} ${style.listHeader}`}>
					<div>First name</div>
					<div>Last name</div>
					<div>Pax</div>
					<div>Nights</div>
					<div>Dates</div>
					<div>Room number</div>
					<div>Category</div>
				</li>
		{currentBookings.length > 0 ? currentBookings.map((booking)=> {
			return <li className={style.listElement} key={booking.roomnum}>
					<div>{booking.firstname}</div>
					<div>{booking.lastname}</div>
					<div>{booking.pax}</div>
					<div>{booking.nights}</div>
					<div className={style.datesDiv}>{booking.dates}</div>
					<div>{booking.roomnum}</div>
					<div>{booking.category}</div>
				</li>
		}) : <h3>No bookings</h3> }
	</ul>
  )
}

export default ReservationsList