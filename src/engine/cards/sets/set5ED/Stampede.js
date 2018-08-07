'use strict';
const Constants = require('../../../Constants');
const StampedeBase = require('../setME2/Stampede');

class Stampede extends StampedeBase {
  constructor (game) {
    super(game, 'Stampede', 'Fifth Edition', '5ED');
  }
}

module.exports = Stampede;
