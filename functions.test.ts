const {shuffleArray} = require('./utils')


// Didnt quite understand what to do here. Grabbed a bot object and ran tests with that.
describe('Describe array should', () => {
    let shuffledArry = shuffleArray()

    test('', () => {

    })
    
    
    test('', () => {
        
    })
})




let testData = {
    id: 2,
    name: 'Rusty', 
    imgAddress: 'https://robohash.org/rusty',
    health: 120, 
    attacks: [
        {
            id: 0, 
            damage: 30
        }, 
        {
            id: 1, 
            damage: 15
        }
    ]
}

describe('Test bot object for correct values', () => {
    
    test('Name shoul be the string of Rusty', () => {
        expect(testData.name).toBe('Rusty')
      })

    test('health should equal the number 120', () => {
        expect(testData.health).toEqual(120)
    })  

    test('url should contain https://', () => {
        expect(testData.imgAddress).toContain('https://')
    })
})

it('Attack damage should equal 30', () => expect(testData.attacks[0].damage).toEqual(30))