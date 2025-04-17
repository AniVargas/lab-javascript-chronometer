class Chronometer {
  constructor() {
    // ... your code goes here

    this.currentTime= 0; 
    this.intervalId= null;

  }
  
  start(callback) {
    this.intervalId= setInterval(()=> {
      this.currentTime= this.currentTime+1 ;
    }, 1000);
  
  }

  getMinutes() {
    // ... your code goes here
    const minutes= Math.floor (this.currentTime/60);
        return twoDigitsMin
  }
  getSeconds() {
    // ... your code goes here
    const seconds= Math.floor(this.currentTime%60);
    const twoDigitsSec= seconds.padStart(2,"0");
    return twoDigitsSec
  }

  computeTwoDigitNumber(value) {
    let twoDigits = value.toString();
      while (value.length < 2) {
        twoDigits = value.padStart(2,"0")
      }
      return twoDigits;
    // ... your code goes here
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId); 
    this.intervalId= null;
  }

  reset() {
    // ... your code goes here
    this.currentTime=0
  }

  split() {
    let split= (minutes) + ":"+ (seconds)
    // ... your code goes here
    return split
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
