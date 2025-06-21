import { StrictMode } from 'react';
import React from 'react'; //React not defined error
import { createRoot } from 'react-dom/client';
import './styles/tailwind.css'; // Import your CSS file
import './styles/htmldisplay.css'; // Import your CSS file
import ReactDOM from 'react-dom';

// Componets Imports
import RenderingEngine from './components/renderingEngine';
import rawHTML from '../index.html?raw'; // Importing HTML file as raw text
import HTMLDisplay from './components/htmldisplay';
import {IterateOverHTMLPreview} from './components/tokenizer.jsx';

let delay ={
  processDelay : 10000,
}
let htmlRaw = rawHTML;
let htmldisp = HTMLDisplay( htmlRaw );
let i =0;
// setInterval(() => {
//   IterateOverHTMLPreview( i, htmlRaw );
//   i++;
// }, 100);
//Utils
function headingComponent(){
  return   <div>
            <div className="bg-gray-800 text-white p-2 block">
              <header className="justify-center font-bold flex w-full text-3xl">
                <h1>Browser Rendering Visualizer</h1>
              </header>
              <RenderingEngine/>
            </div>
            <header className="p-2">
                <h2>Processes</h2>
              </header>
          </div>
}
let heading = headingComponent();
createRoot(document.getElementById('root')).render(
  <div>
      {heading}
  </div>
);
createRoot(document.getElementById('htmlpreview')).render(
  ReactDOM.createPortal(
    <div>
      {htmldisp}
    </div>,
    document.getElementById('htmlpreview')
  )
)
//TODO: add event listener here so that the component can be appended on ev