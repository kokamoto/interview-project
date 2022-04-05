const { faker } = require('@faker-js/faker');

const max = 100;
const products = [];
for (let i=0; i < max; i++) {
  products.push({
    name: faker.commerce.productName(),
    departement: faker.commerce.department(),
    price: parseFloat(faker.commerce.price()),
    description: faker.commerce.productDescription()
  })
}

console.log(JSON.stringify(products));
