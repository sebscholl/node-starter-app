import { describe, expect, it } from 'bun:test'

describe('api', () => {
  it('root path returns a response', async () => {
    const response = await fetch('http://localhost:3000').then(res => res.json())

    expect(response.hi).toEqual('there')
  })
})