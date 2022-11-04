const {shuffleArray} = require('./utils')

const testArr1 = [1, 2, 3, 4]
const testArr2 = []
const testArr3=['hi', 'there', 'mom']
const testArr4=[{'name': 'George'}, {'name': 'Sally'}, {'name': 'Tom'}]

describe('shuffleArray should return', () => {



    test('array', () => {
    expect(Array.isArray(shuffleArray(testArr3))).toBe(true)
    })

    test('', () => {
        expect(shuffleArray(testArr1)).toHaveLength(testArr1.length)
    })

} )