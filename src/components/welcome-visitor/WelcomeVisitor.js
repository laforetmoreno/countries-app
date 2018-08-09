import React from 'react';
import PropTypes from 'prop-types';

import './WelcomeVisitor.scss';

const WelcomeVisitor = ({ title ,text }) => (
  <div className="WelcomeVisitor">
    <h1 className="WelcomeVisitor__title">{title}</h1>
    <h2 className="WelcomeVisitor__text">{text}</h2>
  </div>
)

WelcomeVisitor.Proptypes = {
  title: PropTypes.sting,
  text: PropTypes.sting,
}

export default WelcomeVisitor;
