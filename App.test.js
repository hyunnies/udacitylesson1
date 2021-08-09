import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../reactnd-contacts-complete/src/App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
