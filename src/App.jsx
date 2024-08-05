import "./App.module.css";
import { useState } from "react";
import { useRooms } from "./hooks/useRooms";
import Header from "./Components/Header/Header";
import BookingForm from "./Components/BookingForm/BookingForm";
import ReservationsList from "./Components/ReservationsList/ReservationsList";

function App() {
	const [isFormOpen, setIsFormOpen] = useState(false);
	const { roomsArray } = useRooms();

	return (
    <>
      <main>
        <Header setIsFormOpen={setIsFormOpen} />

        <section>
         {isFormOpen ? <BookingForm roomsArray={roomsArray} /> : <ReservationsList roomsArray={roomsArray}/>}
        </section>



        <footer>2024 © Simon Winter</footer>
      </main>
		</>
	);
}

export default App;
