'use strict';
const Constants = require('../../../Constants');
const SeraphBase = require('../setMED/Seraph');

class Seraph extends SeraphBase {
  constructor (game) {
    super(game, 'Seraph', 'Fifth Edition', '5ED');
  }
}

module.exports = Seraph;
