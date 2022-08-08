import React from 'react'

// Constanta Variabel
// const harga = 6000;
// Var Variabel
// var harga = 20000;
// if(true) {
//     var harga = 60000;
// }
// Let 
let  harga = 20000;
if(true) {
   let harga = 60000;
}


const Variabel = () => {
  return (
    <div>
        <h2>Harga: {harga}</h2>
    </div>
  )
}

export default Variabel
