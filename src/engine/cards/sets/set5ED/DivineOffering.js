'use strict';
const Constants = require('../../../Constants');
const DivineOfferingBase = require('../setMBS/DivineOffering');

class DivineOffering extends DivineOfferingBase {
  constructor (game) {
    super(game, 'Divine Offering', 'Fifth Edition', '5ED');
  }
}

module.exports = DivineOffering;
