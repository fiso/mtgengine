'use strict';
const Constants = require('../../../Constants');
const LifeforceBase = require('../setME4/Lifeforce');

class Lifeforce extends LifeforceBase {
  constructor (game) {
    super(game, 'Lifeforce', 'Unlimited Edition', '2ED');
  }
}

module.exports = Lifeforce;
