'use strict';
const Constants = require('../../../Constants');
const LandTaxBase = require('../setBBD/LandTax');

class LandTax extends LandTaxBase {
  constructor (game) {
    super(game, 'Land Tax', 'Fourth Edition', '4ED');
  }
}

module.exports = LandTax;
