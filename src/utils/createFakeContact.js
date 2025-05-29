const { faker } = require("@faker-js/faker");

const createFakeContact = () => ({
  id: faker.string.uuid(),
  name: faker.person.fullName(),
  email: faker.internet.email(),
  phone: faker.phone.number(),
  job: faker.person.jobTitle(),
});

module.exports = createFakeContact;
