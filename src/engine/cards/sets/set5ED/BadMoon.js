'use strict';
const Constants = require('../../../Constants');
const BadMoonBase = require('../setGVL/BadMoon');

class BadMoon extends BadMoonBase {
  constructor (game) {
    super(game, 'Bad Moon', 'Fifth Edition', '5ED');
  }
}

module.exports = BadMoon;
