'use strict';
const Constants = require('../../../Constants');
const BraingeyserBase = require('../setME4/Braingeyser');

class Braingeyser extends BraingeyserBase {
  constructor (game) {
    super(game, 'Braingeyser', 'Unlimited Edition', '2ED');
  }
}

module.exports = Braingeyser;
