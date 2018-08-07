'use strict';
const Constants = require('../../../Constants');
const PearledUnicornBase = require('../set5ED/PearledUnicorn');

class PearledUnicorn extends PearledUnicornBase {
  constructor (game) {
    super(game, 'Pearled Unicorn', 'Unlimited Edition', '2ED');
  }
}

module.exports = PearledUnicorn;
