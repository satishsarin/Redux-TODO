const initialState = [
  {
    name: 'Use Redux'
  }
]


export default function(state = initialState, action){

	switch(action.type){
		case "CREATE_ITEM":
			return [
				{name: action.payload},
				...state
			]		
			break;
		case "DELETE_ITEM":
			state.splice(action.payload, 1);
			return [...state];
			break;	
	}
	return state;
}