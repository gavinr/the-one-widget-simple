import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import MyWidget from '../.';

const App = () => {
  return (
    <div>
      <MyWidget />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
