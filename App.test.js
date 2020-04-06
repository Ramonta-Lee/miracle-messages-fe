import ReactDom from 'react-dom';
import {render} from "@testing-library/react";
import App from './src/App.js';

it('renders App without crashing', () => {
 render(<App />);

})