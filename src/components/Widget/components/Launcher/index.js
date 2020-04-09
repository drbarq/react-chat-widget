import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const handoffLogo = 'https://imageshandoff.s3.amazonaws.com/Facebook_Profile2.png'

import openLauncher from '@assets/launcher_button.svg';
import close from '@assets/clear-button.svg';
import Badge from './components/Badge';
import './style.scss';

const Launcher = ({ toggle, chatOpened, badge }) =>
  <button type="button" className={chatOpened ? 'rcw-launcher rcw-hide-sm' : 'rcw-launcher'} onClick={toggle}>
    <Badge badge={badge} />
    {chatOpened ?
      <img src={close} className="rcw-close-launcher" alt="" /> :
      <img src={handoffLogo} className="rcw-open-launcher" alt="" />
    }
  </button>;

Launcher.propTypes = {
  toggle: PropTypes.func,
  chatOpened: PropTypes.bool,
  badge: PropTypes.number
};

export default connect(store => ({
  chatOpened: store.behavior.get('showChat')
}))(Launcher);
