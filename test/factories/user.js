import { faker } from '@faker-js/faker';

import Factory from '@test/factories/factory';

export default new Factory({
  model: App.db.models.User,
  attributes: () => ({
    phoneNumber: faker.phone.number({ style: 'national' }),
    countryCode: faker.location.countryCode('numeric')
  }),
  traits: {
    withUsNumber: () => ({
      countryCode: '1'
    }),
    withUkNumber: () => ({
      countryCode: '44'
    })
  }
});
