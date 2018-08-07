'use strict';
const Constants = require('../../../Constants');
const LlanowarElvesBase = require('../setM19/LlanowarElves');

class LlanowarElves extends LlanowarElvesBase {
  constructor (game) {
    super(game, 'Llanowar Elves', 'Unlimited Edition', '2ED');
  }
}

module.exports = LlanowarElves;
