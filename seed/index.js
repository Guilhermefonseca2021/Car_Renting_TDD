const { faker } = require("@faker-js/faker");

console.log({
  id: faker.string.uuid(),
  name: faker.internet.userName(),
});

// npm run seed
