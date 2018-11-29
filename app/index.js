import React from 'react';
import ReactDOM from 'react-dom';

const Button = () => React.createElement('button', null, 'button');

const App = () => (
  <div>
    <Button />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
