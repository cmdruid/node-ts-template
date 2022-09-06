import { helloWorld } from '@src/scratch'

describe('scratch test', () => {
  describe('helloWorld()', () => {
    it('should return "hello world!" by default', () => {
      expect(helloWorld()).toEqual("Hello world!")
    })
    it('should return your name when provided', () => {
      expect(helloWorld('Christopher')).toEqual('Hello Christopher!')
    })
  })
})