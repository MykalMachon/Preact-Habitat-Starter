import { h } from 'preact';
import { useEffect } from 'preact/compat';

const App = (props) => {
  useEffect(() => {
    console.log('here are your props!');
    console.log(props);
  }, []);

  return (
    <div className="preact-app">
      <h1>This is a Preact.js app ⚡</h1>
      <p>
        open this directory in your favourite IDE and go to{' '}
        <code>~./src/app/app.jsx</code> to edit stuff.
      </p>
      <p>ps: open your browser console to see the props passed in</p>
    </div>
  );
};

export default App;
