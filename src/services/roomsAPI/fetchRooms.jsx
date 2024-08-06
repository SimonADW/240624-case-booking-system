

export const fetchRooms = async ()=> {
	try {
		const response = await fetch("https://a1c820d7-3848-43ee-9f82-7825b9a0e839.mock.pstmn.io/get")
		return await response.json()		
	} catch (error){
		console.log(error.message);		
	}
}

