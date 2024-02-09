const { faker } = require("@faker-js/faker");
const Car = require("../src/entities/car");
const CarCategory = require("../src/entities/carCategory");
const Customer = require("../src/entities/customer");
const { join } = require("path");

const seederBaseFolder = join(__dirname, "../", "database");
const ITEMS_AMOUNT = 2

const carCategory = new CarCategory({
  id: faker.string.uuid(),
  name: faker.internet.userName(),
  carIds: [],
  price: faker.finance(20, 100)
});
