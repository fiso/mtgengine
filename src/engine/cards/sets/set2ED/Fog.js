'use strict';
const Constants = require('../../../Constants');
const FogBase = require('../setEMA/Fog');

class Fog extends FogBase {
  constructor (game) {
    super(game, 'Fog', 'Unlimited Edition', '2ED');
  }
}

module.exports = Fog;
