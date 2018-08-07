"use strict";
const Constants = require ("../../../Constants");
const SilenceBase = require("../setM14/Silence");

class Silence extends SilenceBase {
  constructor (game) {
    super(game, "Silence", "Magic Online Theme Decks", "TD0");
  }
}

module.exports = Silence;
