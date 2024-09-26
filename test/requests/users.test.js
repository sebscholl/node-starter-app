import { beforeEach, describe, expect, it } from 'bun:test'

import UserFactory from '@test/factories/user.js'

const { fetcher } = global.App.test;

describe('users', () => {
  let users;

  beforeEach(async () => {
    users = await UserFactory.createList(3);
  })

  describe('GET /users', () => {
    let response;

    beforeEach(async () => {
      response = await fetcher('/users');
    })

    it('returns a 200 status', async () => {
      expect(response.status).toEqual(200);
    })

    it('returns all users', async () => {
      expect(response.data.length).toBe(3);
    })
  })
})