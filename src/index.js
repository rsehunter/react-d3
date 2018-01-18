import React from 'react';
import ReactDOM from 'react-dom';
import Chart from './components/chart';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import {makeStore} from './lib/store';

const store = makeStore();

const app = <Provider store={store}>
  <Chart />
</Provider>

const mountingPoint = document.createElement('root');
mountingPoint.className = 'react-app';
document.body.appendChild(mountingPoint);

ReactDOM.render(app, mountingPoint);
registerServiceWorker();
