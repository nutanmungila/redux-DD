'use strict';
import Popup from './popup';
import React, { Component, PropTypes } from 'react';

class Dropdown extends React.Component {

  constructor(props) {
      super(props);
      this.onClickbox = this.onClickbox.bind(this);
      this.onItemSelectedHandler = this.onItemSelectedHandler.bind(this);
      this.state = {showPopup:false,selectedItemvalue:"Dropdown"};
  }

  onItemSelectedHandler(vl){ 
      React.findDOMNode(this.refs.menubox).value = vl;
      this.setState({selectedItemvalue:vl});
  }
  
  onClickbox(e){
      e.nativeEvent.stopImmediatePropagation();
      this.setState({showPopup:!(this.state.showPopup)});
  }

  componentDidMount(){
    document.addEventListener("click",()=>{ 
      this.setState({showPopup:false});
    })

  }

  render(){
      return( 
            <div className="box" ref="menubox" onClick={this.onClickbox} >
              <div className="ddText">
              {this.state.selectedItemvalue}
              { this.state.showPopup ? <Popup elts={this.props.items} onItemSelected={this.onItemSelectedHandler}/> : null }
              </div> 
            </div> 
        );
  }
  
}

export default Dropdown;