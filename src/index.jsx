/* @refresh reload */
import { render } from 'solid-js/web';
import { Router } from '@solidjs/router';
import App from './App';
import "bootstrap/dist/css/bootstrap.css";


render(() => (
  <Router>
    <App />
  </Router>
), document.getElementById('root'));
