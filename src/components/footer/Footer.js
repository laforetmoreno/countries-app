import React from 'react';
import PropTypes from 'prop-types';
import urlLinkedin from '../../config/urlSocialMedias';

import './Footer.scss'

const Footer = ({ text }) => (
  <footer className="Footer">
    <a className="Footer__item" href={urlLinkedin}>{text}</a>
  </footer>
)

Footer.Proptypes = {
  text: PropTypes.string,
}

export default Footer
