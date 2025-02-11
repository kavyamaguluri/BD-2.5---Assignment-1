const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

let cors = require('cors');
app.use(cors());

app.use(express.static('static'));

let products = [
  {
    id: 1,
    name: "Xiaomi iPhone 12",
    brand: "Xiaomi",
    price: 60000,
    ram: 6,
    rom: 256,
    rating: 4.5,
    os: "Android",
    camera: 108,
  },
  {
    id: 2,
    name: "Oppo Mi 10",
    brand: "Xiaomi",
    price: 30000,
    ram: 6,
    rom: 512,
    rating: 4,
    os: "iOS",
    camera: 64,
  },
  {
    id: 3,
    name: "Samsung Mi 10",
    brand: "Oppo",
    price: 20000,
    ram: 4,
    rom: 256,
    rating: 4,
    os: "Android",
    camera: 24,
  },
  {
    id: 4,
    name: "Apple Find X2",
    brand: "Samsung",
    price: 60000,
    ram: 8,
    rom: 512,
    rating: 4.5,
    os: "iOS",
    camera: 48,
  },
  {
    id: 5,
    name: "Oppo Mi 11",
    brand: "Xiaomi",
    price: 30000,
    ram: 12,
    rom: 128,
    rating: 4,
    os: "iOS",
    camera: 24,
  },
  {
    id: 6,
    name: "OnePlus Find X3",
    brand: "Apple",
    price: 30000,
    ram: 12,
    rom: 64,
    rating: 4,
    os: "Android",
    camera: 64,
  },
  {
    id: 7,
    name: "Apple Pixel 5",
    brand: "Apple",
    price: 70000,
    ram: 4,
    rom: 512,
    rating: 4.5,
    os: "iOS",
    camera: 24,
  },
  {
    id: 8,
    name: "Google Mi 10",
    brand: "Oppo",
    price: 30000,
    ram: 8,
    rom: 64,
    rating: 5,
    os: "iOS",
    camera: 108,
  },
  {
    id: 9,
    name: "Oppo Mi 11",
    brand: "Samsung",
    price: 30000,
    ram: 4,
    rom: 64,
    rating: 4,
    os: "Android",
    camera: 24,
  },
  {
    id: 10,
    name: "Xiaomi Mi 10",
    brand: "Oppo",
    price: 60000,
    ram: 16,
    rom: 512,
    rating: 4.5,
    os: "Android",
    camera: 12,
  },
  {
    id: 11,
    name: "OnePlus Pixel 5",
    brand: "Apple",
    price: 60000,
    ram: 12,
    rom: 64,
    rating: 5,
    os: "Android",
    camera: 12,
  },
  {
    id: 12,
    name: "Xiaomi OnePlus 8",
    brand: "Xiaomi",
    price: 70000,
    ram: 8,
    rom: 64,
    rating: 4.5,
    os: "Android",
    camera: 48,
  },
  {
    id: 13,
    name: "Xiaomi Pixel 6",
    brand: "Oppo",
    price: 30000,
    ram: 4,
    rom: 64,
    rating: 5,
    os: "Android",
    camera: 108,
  },
  {
    id: 14,
    name: "Samsung Find X2",
    brand: "Oppo",
    price: 40000,
    ram: 12,
    rom: 512,
    rating: 4.7,
    os: "Android",
    camera: 48,
  },
  {
    id: 15,
    name: "Google OnePlus 8",
    brand: "Apple",
    price: 20000,
    ram: 16,
    rom: 64,
    rating: 5,
    os: "iOS",
    camera: 24,
  },
  {
    id: 16,
    name: "OnePlus iPhone 12",
    brand: "OnePlus",
    price: 20000,
    ram: 6,
    rom: 128,
    rating: 4.5,
    os: "iOS",
    camera: 64,
  },
  {
    id: 17,
    name: "Google Mi 11",
    brand: "Oppo",
    price: 70000,
    ram: 6,
    rom: 64,
    rating: 4,
    os: "Android",
    camera: 64,
  },
  {
    id: 18,
    name: "Google OnePlus 9",
    brand: "Apple",
    price: 20000,
    ram: 4,
    rom: 64,
    rating: 5,
    os: "Android",
    camera: 64,
  },
  {
    id: 19,
    name: "Oppo Galaxy S22",
    brand: "Samsung",
    price: 20000,
    ram: 16,
    rom: 256,
    rating: 4.7,
    os: "Android",
    camera: 12,
  },
  {
    id: 20,
    name: "Apple Pixel 5",
    brand: "Oppo",
    price: 40000,
    ram: 8,
    rom: 128,
    rating: 4.7,
    os: "Android",
    camera: 108,
  },
];

app.get('/products/sort/popularity', (req, res)=>{
  let sortedProducts = products.slice().sort((prod1, prod2) => prod2.rating - prod1.rating);
  res.json(sortedProducts);
})

app.get('/products/sort/price-high-to-low', (req, res)=>{
  let sortedProducts = products.sort((prod1, prod2)=> prod2.price - prod1.price);
  res.json(sortedProducts)
});

app.get('/products/sort/price-low-to-high', (req, res)=>{
  let sortedProducts = products.sort((prod1, prod2)=> prod1.price - prod2.price);
  res.json(sortedProducts)
});

function filterByRam(ramValue){
  return products.filter(product => product.ram === ramValue);
}

app.get('/products/filter/ram', (req, res)=>{
  let ram = parseInt(req.query.ram);
  let filteredProducts = filterByRam(ram);
  res.json(filteredProducts);
})

function filterByRom(romValue){
  return products.filter(product => product.rom === romValue);
}

app.get('/products/filter/rom', (req, res)=>{
  let rom = parseInt(req.query.rom);
  let filteredProducts = filterByRom(rom);
  res.json(filteredProducts);
})

function filterByBrand(brandValue){
  return products.filter(product => product.brand.toLocaleLowerCase() === brandValue.toLowerCase());
}

app.get('/products/filter/brand', (req, res)=>{
  let Brand = (req.query.brand);
  let filteredProducts = filterByBrand(Brand);
  res.json(filteredProducts);
});

function filterByOs(osValue){
  return products.filter(product => product.os.toLocaleLowerCase() === osValue.toLowerCase());
}

app.get('/products/filter/os', (req, res)=>{
  let OS = (req.query.os);
  let filteredProducts = filterByOs(OS);
  res.json(filteredProducts);
})

function filterByPrice(priceValue){
  return products.filter(product => product.price <=  priceValue);
}

app.get('/products/filter/price', (req, res)=>{
  let Price = parseInt(req.query.price);
  let filteredProducts = filterByPrice(Price);
  res.json(filteredProducts);
})

app.get('/products', (req,res) => {
  res.json(products);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
