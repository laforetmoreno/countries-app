import React from 'react';
import PropTypes from 'prop-types';

import './PageHeader.scss'

const PageHeader = ({ text }) => (
  <header className='PageHeader'>
    <span className="PageHeader__text">{text}</span>
  </header>
);

PageHeader.Proptypes = {
  text: PropTypes.sting,
}

export default PageHeader;
