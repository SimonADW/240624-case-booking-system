import { useState, useContext, createContext } from 'react'
import { roomsData } from "../assets/data/roomsData.js"

/** 
 * @type {createContext<Record<string, never> | { 
 *      roomsArray: RoomItem[],
 *      setRoomsArray: React.Dispatch<React.SetStateAction<RoomItem[]>>
 * }>}
*/
const RoomsContext = createContext({});

export const RoomsProvider = ({ children }) => {
	const [roomsArray, setRoomsArray] = useState(
		() => {
			return roomsData
		}
	);

	return (
		<RoomsContext.Provider value={{ roomsArray, setRoomsArray }}>
			{children}
		</RoomsContext.Provider>
	)
}

export const useRooms = () => {
	const context = useContext(RoomsContext)
	if (Object.keys(context).length === 0) {
		throw new Error('useRooms must be used within a RoomsProvider')
	}

	const { roomsArray, setRoomsArray } = context

	const bookRoom = (roomnum, arrivalDate, pax, firstname, lastname) => {
		const newRoomsArray = roomsArray.map(room => {
			if (room.roomnum === roomnum) {
				const newBookings = [...room.bookings, { 
					dates:  new Array(3).fill(1).map((_, i) => new Date(new Date(arrivalDate).getTime() + (86400000 * i)).toISOString().slice(0, 10)),
					pax, 
					firstname, 
					lastname 
				}]
				
				return { ...room, bookings: newBookings }
			}
			return room
		})

		setRoomsArray(newRoomsArray)
	}

	return {
		roomsArray,
		bookRoom
	}
}
