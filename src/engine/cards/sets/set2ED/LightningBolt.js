'use strict';
const Constants = require('../../../Constants');
const LightningBoltBase = require('../setA25/LightningBolt');

class LightningBolt extends LightningBoltBase {
  constructor (game) {
    super(game, 'Lightning Bolt', 'Unlimited Edition', '2ED');
  }
}

module.exports = LightningBolt;
