'use strict';
const Constants = require('../../../Constants');
const TortureBase = require('../setSHM/Torture');

class Torture extends TortureBase {
  constructor (game) {
    super(game, 'Torture', 'Fifth Edition', '5ED');
  }
}

module.exports = Torture;
