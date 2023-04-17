// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// import React from 'react';
import ReactDOM from 'react-dom';

// const elem1 = React.createElement('span', {children: 'Hello'});
// const elem2 = React.createElement('span', {children: 'world!'})

// const element = React.createElement(
// 'div', { 
//     a: 5,
//     b:10,
//     children: [elem1, ' ', elem2]
// });
// const elem1 = <span>Hello</span>;
// const elem2 = <span>world</span>;

// const jsxElements = (
// <div>
//     {elem1}
//     {elem2}
// </div>
// );

// console.log(jsxElements);

// ReactDOM.render(element, document.querySelector('#root'));
const data = {
    "id": "id-1",
    "url": "https://cdn.pixabay.com/photo/2017/07/31/22/05/feathers-2561511_1280.jpg",
    "title": "Feathers. Art abstract",
    "price": 500,
    "author": {
      "tag": "ractapopulous",
      "url": "https://pixabay.com/users/ractapopulous-24766/"
    },
    "quantity": 10
  };


const painting = (
    <div>
    <img src={data.url} alt={data.title} width='480' />
    <h2>{data.title}</h2>
    <p>Autor: <a href={data.author.url}>{data.author.tag}</a></p>
    <p>Price: {data.price} credite</p>
    <p>Accessibility: do you have</p>
    <button type='button'>Add to cart</button>
</div>
);
ReactDOM.render(painting, document.querySelector('#root'));