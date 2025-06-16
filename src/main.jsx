import { StrictMode } from 'react';
import React from 'react'; //React not defined error
import { createRoot } from 'react-dom/client';
import './styles/tailwind.css'; // Import your CSS file

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <span className='cursor-grabbing'>Hell</span>
  </StrictMode>,
)

//TODO: add event listener here so that the component can be appended on event