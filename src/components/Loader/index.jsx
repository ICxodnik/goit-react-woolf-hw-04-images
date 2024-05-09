import PropTypes from 'prop-types';
import React from 'react';
import { ThreeDots } from 'react-loader-spinner';

export default function Loader({ hide }) {
  if (hide) {
    return;
  }
  return (
    <div className="loader">
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

Loader.propTypes = { hide: PropTypes.bool };
