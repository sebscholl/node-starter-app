import { beforeEach, describe, expect, it } from 'bun:test'

const { fetcher } = global.App.test;

describe('application', () => {

  describe('GET /', () => {
    let response;

    beforeEach(async () => {
      response = await fetcher('/');
    })

    it('returns a 200 status', async () => {
      expect(response.status).toEqual(200);
    })

    it('returns hello world object', async () => {
      expect(response.data).toEqual({ hello: 'world' });
    })
  })
})