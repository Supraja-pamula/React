// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

import {createRoot} from 'react-dom/client';
createRoot(document.getElementById("root")).render(
  <TemporaryName/>
)

function TemporaryName(){
  return (<div>
    <img src='./src/assets/react.svg' width="40px"/>
    <h1>Fun facts about React!</h1>
    <ul>
      <li>Was first relese in 2013</li>
      <li>Was originally created by Jorder</li>
      <li>Has well over 200k stars on Github</li>
      <li>It maintained by Meta</li>
      <li>Powers thousands of enterprice apps, Including mobile apps</li>
    </ul>
  </div>)
}