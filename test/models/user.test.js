// test/index.test.ts

import { describe, expect, it, beforeEach } from 'bun:test'

import UserFactory from '@test/factories/user.js'

describe('User model', () => {
  let user;

  beforeEach(async () => {
    user = await UserFactory.create({ phoneNumber: '123-456-7890' });
  })

  it('has a valid factory', async () => {
    expect(user.id).toBeString();
  })

  describe('phoneNumber', () => {
    it('strips non-numeric characters', async () => {
      expect(user.phoneNumber).toBe('1234567890');
    })

    it('validates minimum length of 5', async () => {
      const message = await user.update({ phoneNumber: '1-2-3-4' }).catch(e => e.errors[0].message);

      expect(message).toEqual('Validation len on phoneNumber failed');
    })

    it('validates maximum length of 12', async () => {
      const message = await user.update({ phoneNumber: '123-456-789-0123' }).catch(e => e.errors[0].message);

      expect(message).toEqual('Validation len on phoneNumber failed');
    })
  })

  describe('countryCode', () => {
    it('is a string', async () => {
      expect(user.countryCode).toBeString();
    })
  })
})