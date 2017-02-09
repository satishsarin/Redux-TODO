import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {deleteItem} from '../actions/index';

class ListItems extends Component{

	createListItems(){
		return this.props.items.map((item, i)=>{
			return(
					<li key={i} onClick={()=>this.props.dItem(i)}> {item.name}</li>
			);
		})
	}

	render(){
		return(
				<ul>
					{this.createListItems()}
				</ul>
			);
	}
}

function mapStateToProps(store){
	return{
		items: store.dNotes
	}
}

function matchDispatchToProps(dispatch){
	return bindActionCreators({dItem: deleteItem}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(ListItems);