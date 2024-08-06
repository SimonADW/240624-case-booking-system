import { useContext } from 'react'
import { RoomsContext } from '../Components/RoomsProvider/RoomsProvider'



export const useRooms = () => {
	const context = useContext(RoomsContext)
	if (Object.keys(context).length === 0) {
		throw new Error('useRooms must be used within a RoomsProvider')
	}

	const { roomsArray, setRoomsArray } = context

	const bookRoom = (roomnum, arrivalDate, nights, pax, firstname, lastname) => {
		const newRoomsArray = roomsArray.map(room => {
			if (room.roomnum === roomnum) {
				const newBookings = [...room.bookings, { 
					dates:  new Array(nights).fill(1).map((_, i) => new Date(new Date(arrivalDate).getTime() + (86400000 * i)).toISOString().slice(0, 10)),
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
