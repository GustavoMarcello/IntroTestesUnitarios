const { sum, inOneHour} = require('./myCode')

//funções do jest
describe('sum function', () => {
    beforeAll(() => {
        console.log('before all')
    })
    beforeEach(() => {
        console.log('before each')
    })
    afterEach(() => {
        console.log('afterEach')
    })
    afterAll(() => {
        console.log('after all')
    })    
    it('sums 2 numbers', () => {
        expect(sum(2,2)).toBe(4)
    })
})

describe('inOneHour function', () => {
    it('returns timestamp after one hour', () => {
        const realDateNow = Date.now.bind(global.Date)
        global.Date.now = () => 0
        expect(inOneHour()).toBe(3600000)
        global.Date.now = realDateNow
    })
})