'use strict';
const Constants = require('../../../Constants');
const FogBase = require('../setEMA/Fog');

class Fog extends FogBase {
  constructor (game) {
    super(game, 'Fog', 'Fourth Edition', '4ED');
  }
}

module.exports = Fog;
