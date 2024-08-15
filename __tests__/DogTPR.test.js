const DogTPR = require('../utils/dogTPR');

describe('DogTPR', () => {
    test("checkTemp should return correct message based on temperature", () => {
        const dog = new DogTPR(101.5, 80, 22, 30);
        expect(dog.checkTemp()).toBe("That temperature looks great!");

        const dogHighTemp = new DogTPR(103.0, 80, 22, 30);
        expect(dogHighTemp.checkTemp()).toBe("That temperature seems too high, consider taking your dog to the vet.");

        const dogLowTemp = new DogTPR(99.0, 80, 22, 30);
        expect(dogLowTemp.checkTemp()).toBe("That temperature looks too low, consider taking your dog to the vet.");
    })
})

describe('DogTPR', () => {
    test("checkPulse should return correct message based on pulse", () => {
        const dog = new DogTPR(101.5, 80, 22, 30);
        expect(dog.checkPulse()).toBe("That pulse looks great!");

        const dogHighPulse = new DogTPR(101.5, 120, 22, 30);
        expect(dogHighPulse.checkPulse()).toBe("That pulse seems too high, consider taking your dog to the vet.");

        const dogLowPulse = new DogTPR(101.5, 50, 22, 30);
        expect(dogLowPulse.checkPulse()).toBe("That pulse seems too low, consider taking your dog to the vet.");
    })
})