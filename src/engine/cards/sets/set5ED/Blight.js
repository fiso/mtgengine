'use strict';
const Constants = require('../../../Constants');
const BlightBase = require('../setMED/Blight');

class Blight extends BlightBase {
  constructor (game) {
    super(game, 'Blight', 'Fifth Edition', '5ED');
  }
}

module.exports = Blight;
