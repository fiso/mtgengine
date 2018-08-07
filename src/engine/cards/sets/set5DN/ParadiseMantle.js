'use strict';
const Constants = require('../../../Constants');
const ParadiseMantleBase = require('../setMMA/ParadiseMantle');

class ParadiseMantle extends ParadiseMantleBase {
  constructor (game) {
    super(game, 'Paradise Mantle', 'Fifth Dawn', '5DN');
  }
}

module.exports = ParadiseMantle;
