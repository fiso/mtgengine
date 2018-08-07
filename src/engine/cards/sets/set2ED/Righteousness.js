'use strict';
const Constants = require('../../../Constants');
const RighteousnessBase = require('../setDDL/Righteousness');

class Righteousness extends RighteousnessBase {
  constructor (game) {
    super(game, 'Righteousness', 'Unlimited Edition', '2ED');
  }
}

module.exports = Righteousness;
