import React, {Component} from 'react';
import ListItems from '../containers/list-items';
import AddItem from '../containers/add-item';


class App extends Component{

	render(){
		return (
				<div>
					Add Notes:
						<AddItem />
					<hr/>
					List Notes:
						<ListItems />	
				</div>
			)
	}

}

export default App;