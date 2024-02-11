const { faker } = require("@faker-js/faker");
const Car = require("./../src/entities/car");
const CarCategory = require("./../src/entities/carCategory");
const Customer = require("./../src/entities/customer");
const { writeFile } = require("fs/promises");
const { join } = require("path");

const seederBaseFolder = join(__dirname, "../", "database");
const ITEMS_AMOUNT = 2;

const carCategory = new CarCategory({
  id: faker.string.uuid(),
  name: faker.vehicle.type(),
  carIds: [],
  price: faker.number.int({ min: 10, max: 100 }),
});

const cars = [];
for (let index = 0; index <= ITEMS_AMOUNT; index++) {
  const car = new Car({
    id: faker.string.uuid(),
    name: faker.vehicle.model(),
    available: true,
    gasAvailable: true,
    releaseYear: faker.date.past().getFullYear(),
  });
  carCategory.carIds.push(car.id);
  cars.push(car);
}

const write = (fileName, data) =>
  writeFile(join(seederBaseFolder, fileName), JSON.stringify(data));
(async () => {
  await write("cars.json", cars);
  // nao estamos gerando uma lista de categoria de carros por isso dei um array;
  await write("carCategory.json", [carCategory]);
  console.log('cars', cars)
  console.log('cars', cars)
})()
