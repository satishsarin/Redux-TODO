import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {createitem} from '../actions/index';

class AddItem extends Component {


	render(){
		return(
			<div>
				ToDO: <input type='text' ref= 'itemname' />
				<button onClick={() => this.props.cItem(this.refs.itemname.value)}> Add </button>
			</div>
		)
	}

}

function matchDispatchToProps(dispatch){
	return bindActionCreators({cItem: createitem}, dispatch)
}

function mapStateToProps(store){
	return{
		items: store.dNotes
	}
}

export default connect(mapStateToProps, matchDispatchToProps)(AddItem);