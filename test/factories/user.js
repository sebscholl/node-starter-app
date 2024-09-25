import { faker } from '@faker-js/faker';

import { App } from '@config/application.js'

export const { User } = App.db.models;

const attributes = (overrides) => ({
  phoneNumber: faker.phone.number({ style: 'national' }),
  countryCode: faker.location.countryCode('numeric'),
  ...overrides,
});

export default {
  async build(overrides = {}) {
    return User.create(attributes(overrides));

  },

  async create(overrides = {}) {
    return User.create(attributes(overrides));
  }
};