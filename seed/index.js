const { faker } = require("@faker-js/faker");
const Car = require('../src/entities/car')
const CarCategory = require('../src/entities/carCategory')
const Customer = require('../src/entities/customer')

console.log({
  id: faker.string.uuid(),
  name: faker.internet.userName(),
});

// npm run seed