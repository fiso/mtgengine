'use strict';
const Constants = require('../../../Constants');
const DurkwoodBoarsBase = require('../setS00/DurkwoodBoars');

class DurkwoodBoars extends DurkwoodBoarsBase {
  constructor (game) {
    super(game, 'Durkwood Boars', 'Fifth Edition', '5ED');
  }
}

module.exports = DurkwoodBoars;
