'use strict';
const Constants = require('../../../Constants');
const VedalkenMastermindBase = require('../set10E/VedalkenMastermind');

class VedalkenMastermind extends VedalkenMastermindBase {
  constructor (game) {
    super(game, 'Vedalken Mastermind', 'Fifth Dawn', '5DN');
  }
}

module.exports = VedalkenMastermind;
