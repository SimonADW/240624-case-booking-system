import style from "./Header.module.css";


const Header = ({setIsFormOpen}) => {
  return (
	<>
	<header><h1>24SevenHotels</h1></header>
	<nav>
		<button onClick={()=> setIsFormOpen(false)}>Reservations</button>
		<h3>Booking system</h3>
		<button onClick={()=> setIsFormOpen(true)}>New booking</button>
	</nav>
	</>
  )
}

export default Header