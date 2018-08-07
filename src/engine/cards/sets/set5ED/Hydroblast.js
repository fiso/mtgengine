'use strict';
const Constants = require('../../../Constants');
const HydroblastBase = require('../setEMA/Hydroblast');

class Hydroblast extends HydroblastBase {
  constructor (game) {
    super(game, 'Hydroblast', 'Fifth Edition', '5ED');
  }
}

module.exports = Hydroblast;
