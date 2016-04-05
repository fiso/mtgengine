"use strict";
const Constants = require ("../../../Constants");
const SeersSundialBase = require("../setC13/SeersSundial");

class SeersSundial extends SeersSundialBase {
  constructor(game) {
    super(game, "Seer's Sundial", "Duel Decks: Zendikar vs. Eldrazi", "DDP");
  }
}

module.exports = SeersSundial;
