'use strict';
const Constants = require('../../../Constants');
const ContractfromBelowBase = require('../setSUM/ContractfromBelow');

class ContractfromBelow extends ContractfromBelowBase {
  constructor (game) {
    super(game, 'Contract from Below', 'Unlimited Edition', '2ED');
  }
}

module.exports = ContractfromBelow;
