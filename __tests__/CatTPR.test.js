const CatTPR = require('../utils/catTPR');

describe('CatTPR', () => {
    test("checkTemp should return correct message based on temperature", () => {
        const cat = new CatTPR(101.5, 160, 22);
        expect(cat.checkTemp()).toBe("The temperature looks great!");

        const catHighTemp = new CatTPR(103.0, 160, 22);
        expect(catHighTemp.checkTemp()).toBe("That temperature seems too high, consider taking your cat to the vet.");

        const catLowTemp = new CatTPR(99.0, 160, 22);
        expect(catLowTemp.checkTemp()).toBe("That temperature looks too low, consider taking your cat to the vet.");
    })
})