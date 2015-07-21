import {SHOW_POPUP,HIDE_POPUP} from '../constants/DropdownActionTypes';

export default function showhidepopup(state = false,action) {
	switch(state === false){
	case SHOW_POPUP:
	  return true;
	case HIDE_POPUP:
	  return false;
	default:
	  return false;  
  }
}
