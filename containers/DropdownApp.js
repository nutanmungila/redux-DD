import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'redux/react';
import Dropdown from '../components/dropdown';
import * as DropownActions from '../actions/DropownActions';

@connect(state => ({
  flag: state.flag
}))
export default class DropdownApp extends Component {
  render() {
    const { flag, dispatch } = this.props;
    return (
      <Dropdown flag={flag}
               {...bindActionCreators(DropownActions, dispatch)} />
    );
  }
}
