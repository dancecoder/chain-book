import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';
import {BrowserRouter} from "react-router-dom"
import {renderRoutes} from "react-router-config"
import Routes from "./Routes";

ReactDOM.render(
  <BrowserRouter>
    <div>{renderRoutes(Routes)}</div>
  </BrowserRouter>,
  document.getElementById('root')
);
