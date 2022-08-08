import React from 'react'
const foods = [
    {
        nama: "Soto",
        harga: 12000
    },
    {
        nama: "Bakso",
        harga: 10000
    },
    {
        nama: "Mie Ayam",
        harga: 7000
    },
    {
        nama: "Nasi Goreng",
        harga: 15000
    }
];
// Reduce 
const totalBayar = foods.reduce((totalHarga, food) => totalHarga+food.harga, 0);
const Map = () => {
  return (
    <div>
        {/* Map */}
        <h2>Map</h2>
        <ul>
            { foods.map((food, index) => (
                <li>{index+1} - {food.nama} - Harga: {food.harga}</li>
            ))}
        </ul>
        {/* FIlter */}
        <h2>Map Filter Harga Diatas Lebih Dari 10.000</h2>
        <ul>
            { foods
                .filter((food) => food.harga > 10000)
                .map((food, index) => (
                <li>{index+1} - {food.nama} - Harga: {food.harga}</li>
            ))}
        </ul>
        <h3>Total Harga: {totalBayar}</h3>
    </div>
  )
}

export default Map