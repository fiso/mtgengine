"use strict";
const Constants = require ("../../../Constants");
const VampireNighthawkBase = require("../setE02/VampireNighthawk");

class VampireNighthawk extends VampireNighthawkBase {
  constructor (game) {
    super(game, "Vampire Nighthawk", "Duel Decks: Zendikar vs. Eldrazi", "DDP");
  }
}

module.exports = VampireNighthawk;
