'use strict'
import React, { Component, PropTypes } from 'react';

class Popupitem extends React.Component{
	static propTypes = {
    showhidepopup: PropTypes.func.isRequired,
    flag: PropTypes.number.isRequired
    };

	constructor(props){
		super(props);
		//this.onClickPopupitem = this.onClickPopupitem.bind(this);
	}

	// onClickPopupitem(e){
 //     	this.props.onSelectedItem(this.props.itm);
	// }

	render(){
		const { showhidepopup,flag } = this.props;
		return(<div className="popupitem-box" onClick={showhidepopup}>{this.props.itm}</div>);
	}
}

export default Popupitem;

