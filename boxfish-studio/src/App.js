import React from 'react';
import Navbar from "./components/NavBar";
import Content from "./components/Content";

import './App.scss';


export default class App extends React.Component {

  render() {
    return (
      <div>
        <Navbar />
        <Content />
      </div>
    );
  }
}
