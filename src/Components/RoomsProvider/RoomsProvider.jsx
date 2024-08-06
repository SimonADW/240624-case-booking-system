import { useState, createContext, useEffect } from 'react'
import { fetchRooms } from '../../services/roomsAPI/fetchRooms';


/** 
 * @type {createContext<Record<string, never> | { 
 *      roomsArray: RoomItem[],
 *      setRoomsArray: React.Dispatch<React.SetStateAction<RoomItem[]>>
 * }>}
*/
export const RoomsContext = createContext({});


export const RoomsProvider = ({ children }) => {	
	const [roomsArray, setRoomsArray] = useState([]);
	
	// Fetch roomslist from mock API
	useEffect(() => {
		const fetchAndSetRooms = async ()=> {
			const roomsData = await fetchRooms();				 
			setRoomsArray(roomsData);
		}
		fetchAndSetRooms();
	}, [])
	

	return (
		<RoomsContext.Provider value={{ roomsArray, setRoomsArray }}>
			{children}
		</RoomsContext.Provider>
	)
}
