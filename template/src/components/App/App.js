import React, { Component } from 'react';
import { dependencies, devDependencies } from '../../../package.json';

const deps = Object.assign({}, dependencies, devDependencies);

class App extends Component {
  render() {
    return (
      <div>
        <div class="container">
          <h1>New React Project</h1>
          <h2>Features</h2>
          <ul>
            <li><a href="https://facebook.github.io/react/">React ({deps['react']})</a></li>
            <li><a href="https://github.com/reactjs/react-router">React Router ({deps['react-router']})</a></li>
            <li><a href="https://babeljs.io/">Babel</a></li>
            <li><a href="https://github.com/gaearon/react-hot-loader">React Hot Loader ({deps['react-hot-loader']})</a></li>
            <li><a href="https://webpack.github.io/docs/webpack-dev-server.html">Webpack Dev Server</a></li>
            <li><a href="https://github.com/jtangelder/sass-loader">Sass</a> with <a href="https://github.com/passy/autoprefixer-loader">Autoprefixer</a></li>
          </ul>

          <h2>Generate Components</h2>

          <p>Install <a href="https://github.com/markmur/react-component-gen">react-component-gen</a> to start generating components from the command line.</p>
        </div>
      </div>
    );
  }
}

export default App;
