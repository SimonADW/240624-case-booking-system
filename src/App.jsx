import "./App.module.css";
import { useState, useEffect } from "react";
import {roomsData} from "./assets/data/roomsData.js"
import Header from "./Components/Header/Header";
import BookingForm from "./Components/BookingForm/BookingForm";
import ReservationsList from "./Components/ReservationsList/ReservationsList";

function App() {
	const [isFormOpen, setIsFormOpen] = useState(false);
	const [roomsArray, setRoomsArray] = useState(
    () => {
		const storedRooms = window.localStorage.getItem("rooms");
		return storedRooms ? JSON.parse(storedRooms) : [];
	});

  // TO PUT ROOMSLIST TO LOCAL STORAGE INITIALLY, 
  // UNCOMMENT AND REFRESH ONCE (COMMENT OUT NEXT USEREF):
    //   useEffect(() => {		      
    //   window.localStorage.setItem("rooms", JSON.stringify(roomsData));
    // }, []);
  
  useEffect(() => {		
    window.localStorage.setItem("rooms", JSON.stringify(roomsArray));
  }, [roomsArray]);


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
