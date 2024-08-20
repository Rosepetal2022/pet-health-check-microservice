class CatTPR {
    // Cat class to get compare temperature, pulse, and respiration.
    // has a checkTemp method, checkPulse method, and checkResp method for these purposes.
    constructor(temperature, pulse, respiration) {
        this.temperature = temperature;
        this.pulse = pulse;
        this.respiration = respiration;
    }

    checkTemp() {
        if (this.temperature > 102.5) {
            return "That temperature seems too high, consider taking your cat to the vet.";
        } else if (this.temperature < 100) {
            return "That temperature looks too low, consider taking your cat to the vet.";
        } else {
            return "The temperature looks great!";
        }
    }

    checkPulse() {
        if (this.pulse > 200) {
            return "That pulse seems too high, consider taking your cat to the vet.";
        } else if (this.pulse < 150) {
            return "That pulse looks too low, consider taking your cat to the vet.";
        } else {
            return "The temperature looks great!";
        }
    }

    checkResp() {
        if(this.respiration < 20) {
            return "That respiratory rate is too low, consider taking your cat to the vet."
        } else if(this.respiration > 30) {
            return "That respiratory rate is too high, consider taking your cat to the vet."
        } else {
            return "That respiratory rate looks great!"
        }
    } 
}


// Example Use
// const myCat = new CatTPR(101.5, 50, 22, 30);
// console.log(myCat.checkTemp()); 
// console.log(myCat.checkPulse()); 
// console.log(myCat.checkResp()); 

module.exports = CatTPR;