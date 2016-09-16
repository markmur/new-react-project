import React, { Component } from 'react';
import { dependencies } from 'package.json';

// components
import Header from 'Header/Header';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div class="app">
        <Header />
        <div class="container">

          <h1>Features!</h1>
          <ul>
            <li><a href="https://facebook.github.io/react/">React ({dependencies['react']})</a></li>
            <li><a href="https://github.com/reactjs/react-router">React Router ({dependencies['react-router']})</a></li>
            <li><a href="https://babeljs.io/">Babel</a></li>
            <li><a href="https://github.com/gaearon/react-hot-loader">React Hot Loader</a></li>
            <li><a href="https://webpack.github.io/docs/webpack-dev-server.html">Webpack Dev Server</a></li>
            <li><a href="https://github.com/jtangelder/sass-loader">Sass</a> with <a href="https://github.com/passy/autoprefixer-loader">Autoprefixer</a></li>
          </ul>

          <h1>ProTip</h1>

          <p>Install <a href="https://github.com/markmur/react-component-gen">react-component-gen</a> to start generating components from the command line.</p>
        </div>
      </div>
    );
  }
}
