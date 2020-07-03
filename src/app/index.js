import habitat from 'preact-habitat';
import App from './components/App.jsx';

const { render } = habitat(App);

render({
  selector: '#habitat',
  defaultProps: undefined,
  inline: false,
  clean: false,
});
