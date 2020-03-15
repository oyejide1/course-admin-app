import React from 'react';
import ReactDom from 'react-dom';


const Hi = () => <h1>Hello world</h1>;



ReactDom.render(
  <Hi />, document.getElementById('app')
);