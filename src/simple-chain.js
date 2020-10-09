const CustomError = require("../extensions/custom-error");

const chainMaker = {
  result: [],

  getLength() {
    return this.result.length;
  },
  addLink(value) {
    this.result.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if(typeof position !== 'number' || position >= this.getLength() || position <= 0) {
      this.result = [];
      throw new Error();
    } else {
      this.result.splice(position - 1, 1);
      return this;
    }
  },
  reverseChain() {
    this.result.reverse();
    return this;
  },
  finishChain() {
    let finalResult = this.result.join('~~');
    this.result = [];
    return finalResult;
  }
};

module.exports = chainMaker;
