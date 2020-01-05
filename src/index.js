import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider } from 'mobx-react'
import PokemonStore from '../src/store/index'

ReactDOM.render(
<Provider PokemonStore={PokemonStore}>
    <App />
</Provider>,
document.getElementById('root'));