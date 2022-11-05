const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
//Guardo en un array (products) los productos obtenidos del archivo JSON
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	index: (req, res) => {
		res.render('index',{products: products})
			//products (si pongo products solo ==> products:products)
		
	},
	search: (req, res) => {
		res.render('search')
	},
};

module.exports = controller;
