'use strict';
const Constants = require('../../../Constants');
const ParalyzeBase = require('../setVMA/Paralyze');

class Paralyze extends ParalyzeBase {
  constructor (game) {
    super(game, 'Paralyze', 'Fifth Edition', '5ED');
  }
}

module.exports = Paralyze;
