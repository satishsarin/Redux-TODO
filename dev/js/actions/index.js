export const createitem = (item) => {
	return {
		type: "CREATE_ITEM",
		payload: item
	}
}

export const deleteItem = (index) => {
	return {
		type: "DELETE_ITEM",
		payload: index
	}
}