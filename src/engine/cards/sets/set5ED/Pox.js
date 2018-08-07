'use strict';
const Constants = require('../../../Constants');
const PoxBase = require('../setMED/Pox');

class Pox extends PoxBase {
  constructor (game) {
    super(game, 'Pox', 'Fifth Edition', '5ED');
  }
}

module.exports = Pox;
