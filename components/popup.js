'use strict';
import React from 'react';
import Popupitem from './popupitem';

class Popup extends React.Component{

  	constructor(props){
		super(props);
		this.onClickhandler = this.onClickhandler.bind(this);
  	}

  	onClickhandler(item){
	  	this.props.onItemSelected(item);
  	}

	render(){
		return(
				<div className="popup-box">
					{this.props.elts.map((item)=> {
						return(<Popupitem key={item} onSelectedItem={this.onClickhandler} itm={item}/>);
					})}
				</div>
		      );
	}

}
export default Popup;
