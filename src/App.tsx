// import { useState } from 'react'
// import logo from './logo.svg'
// import './App.css'

import React, { Component } from 'react';
import { App, View } from 'framework7-react';
import Login from './Login';

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>Hello Vite + React!</p>
//         <p>
//           <button type="button" onClick={() => setCount((count) => count + 1)}>
//             count is: {count}
//           </button>
//         </p>
//         <p>
//           Edit <code>App.tsx</code> and save to test HMR updates.
//         </p>
//         <p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//           {' | '}
//           <a
//             className="App-link"
//             href="https://vitejs.dev/guide/features.html"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Vite Docs
//           </a>
//         </p>
//       </header>
//     </div>
//   )
// }

interface AppProps {}
interface AppState {
  name: string;
}

const f7params = {
  id: 'io.framework7.testapp', // App bundle ID
  name: 'Framework7', // App name
  theme: 'auto', // Automatic theme detection
  // store,
  // App routes
  routes: [
    {
      path: '/',
      component: Login,
    },
  ],
};

export default class Application extends Component<AppProps, AppState> {
  constructor(props : any) {
    super(props);
    this.state = {
      name: 'React',
    };
  }

  render() {
    return (
      <App {...f7params}>
        <View main url="/" />
      </App>
    );
  }
}
