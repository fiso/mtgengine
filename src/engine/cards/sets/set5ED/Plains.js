'use strict';
const Constants = require('../../../Constants');
const PlainsBase = require('../setC18/Plains');

class Plains extends PlainsBase {
  constructor (game) {
    super(game, 'Plains', 'Fifth Edition', '5ED');
  }
}

module.exports = Plains;
