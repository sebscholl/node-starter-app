// test/index.test.ts

import { describe, expect, it, beforeEach } from 'bun:test'

import UserFactory, { User } from '@test/factories/user.js'

describe('User model', () => {
  let user;

  beforeEach(async () => {
    user = await UserFactory.build({ phoneNumber: '123-456-7890' });
  })

  it('has a valid factory', async () => {
    await user.save();

    expect(user instanceof User).toBe(true);
  })

  describe('phoneNumber', () => {
    it('strips non-numeric characters', async () => {
      await user.save();

      expect(user.phoneNumber).toBe('1234567890');
    })
  })
})