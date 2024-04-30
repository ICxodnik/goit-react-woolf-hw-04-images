import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ThreeDots } from 'react-loader-spinner';

export default class Loader extends Component {
  //   static propTypes = { second: third };

  getClasses() {
    let btnClass = 'loader';
    if (this.props.hide) btnClass += ' hidden';
    return btnClass;
  }
  render() {
    return (
      <div className={this.getClasses()}>
        <ThreeDots
          visible={true}
          height="80"
          width="80"
          color="#4fa94d"
          radius="9"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    );
  }
}
