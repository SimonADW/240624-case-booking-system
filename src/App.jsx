import { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import BookingForm from "./Components/BookingForm/BookingForm";
import ReservationsList from "./Components/ReservationsList/ReservationsList";

function App() {
	const [isFormOpen, setIsFormOpen] = useState(false);

	return (
		<>
			<Header setIsFormOpen={setIsFormOpen} />

      {isFormOpen ? <BookingForm /> : <ReservationsList />}
		</>
	);
}

export default App;
