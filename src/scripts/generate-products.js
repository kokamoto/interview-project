const { faker } = require('@faker-js/faker');

const max = 200;
const products = [];
for (let i=0; i < max; i++) {
  products.push({
    name: faker.commerce.productName(),
    departement: faker.random.arrayElement(['Toys', 'Hardware', 'Appliances', 'Electronics', 'Garden', 'Baby', 'Sports']),
    price: parseFloat(faker.commerce.price()),
    description: faker.commerce.productDescription()
  })
}

console.log(JSON.stringify(products));
