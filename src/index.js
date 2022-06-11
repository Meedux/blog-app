import App from "./App";
import 'bootswatch/dist/lux/bootstrap.min.css';
import './assets/style/style.css'
import * as ReactDom from 'react-dom/client';

const root = ReactDom.createRoot(document.getElementById('root'));

root.render(<App />);