const {shuffleArray} = require('./utils')


describe('shuffleArray should return', () => {

    test('something', () => {
    expect(shuffleArray()).toBe(true)
    } )
    test('array', () => {
    expect(Array.isArray(shuffleArray())).toBe(true)
    })
    expect(shuffleArray()).toHaveLength(15)

} )