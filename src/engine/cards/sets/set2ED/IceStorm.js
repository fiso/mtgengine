'use strict';
const Constants = require('../../../Constants');
const IceStormBase = require('../setMED/IceStorm');

class IceStorm extends IceStormBase {
  constructor (game) {
    super(game, 'Ice Storm', 'Unlimited Edition', '2ED');
  }
}

module.exports = IceStorm;
