import React from 'react';
import ReactDOM from 'react-dom/client';
import Search from './search';
import Display from './display';
import './index.css';


// fetch(`https://graphqlpokemon.favware.tech/v7/${Name}`, {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     query: `
//       {
//         getPokemon(pokemon: dragonite){

//           type  



//         }
//       }
//     `
//   })
// })
//   .then((res) => res.json() )
//   .then((json) => console.log(json.data));



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Search />
);


