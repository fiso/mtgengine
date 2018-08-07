'use strict';
const Constants = require('../../../Constants');
const DeflectionBase = require('../set8ED/Deflection');

class Deflection extends DeflectionBase {
  constructor (game) {
    super(game, 'Deflection', 'Fifth Edition', '5ED');
  }
}

module.exports = Deflection;
