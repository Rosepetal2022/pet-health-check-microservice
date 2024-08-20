class DogTPR {
    // Dog class to check the temp, pulse and respiration based on size of the dog
    // has a checkTemp method, checkPulse method and checkResp method for these purposes
    constructor(temperature, pulse, resipiration, size) {
        this.temperature = temperature;
        this.pulse = pulse;
        this.resipiration = resipiration;
        this.size = size;
    }

    checkTemp() {
        if (this.temperature > 102.5) {
            return "That temperature seems too high, consider taking your dog to the vet.";
        } else if (this.temperature < 100) {
            return "That temperature looks too low, consider taking your dog to the vet.";
        } else {
            return "That temperature looks great!";
        }
    }

    checkPulse() {
        if(this.size < 26) {
            if(this.pulse < 90) {
                return "That pulse seems too low, consider taking your dog to the vet."
            } else if(this.pulse > 120) {
                return "That pulse seems too high, consider taking your dog to the vet."
            } else {
                return "That pulse looks great!"
            }
        } else if(this.size > 27 && this.size < 51) {
            if(this.pulse < 70) {
                return "That pulse seems too low, consider taking your dog to the vet."
            } else if(this.pulse > 110) {
                return "That pulse seems too high, consider taking your dog to the vet."
            } else {
                return "That pulse looks great!"
            }
        } else {
            if(this.pulse < 60) {
                return "That pulse seems too low, consider taking your dog to the vet."
            } else if(this.pulse > 90) {
                return "That pulse seems too high, consider taking your dog to the vet."
            } else {
                return "That pulse looks great!"
            }
        }
    }

    checkResp() {
        if(this.resipiration < 18) {
            return "That respiratory rate is too low, consider taking your dog to the vet."
        } else if(this.resipiration > 24) {
            return "That respiratory rate is too high, consider taking your dog to the vet."
        } else {
            return "That respiratory rate looks great!"
        }
    } 
}


// Example Use
// const myDog = new DogTPR(101.5, 50, 22, 30);
// console.log(myDog.checkTemp()); 
// console.log(myDog.checkPulse()); 
// console.log(myDog.checkResp()); 

module.exports = DogTPR;