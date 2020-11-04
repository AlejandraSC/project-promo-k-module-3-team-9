import React from 'react';
import './Footer.scss';
import logo from '../images/logo-adalab.png';

class Footer extends React.Component {
  render() {
    return (
      <footer class="footer">
        <small class="footer__small"> Montgomery cards @2020</small>
        <a href="http://www.adalab.es" target="_blank" title="Ir a Adalab">
          <img class="footer__logo" src={logo} title="Logo" alt="Logo" />
        </a>
      </footer>
    );
  }
}

export default Footer;
