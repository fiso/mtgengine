"use strict";
const Constants = require ("../../../Constants");
const BrawnBase = require("../setCM2/Brawn");

class Brawn extends BrawnBase {
  constructor (game) {
    super(game, "Brawn", "Magic Online Theme Decks", "TD0");
  }
}

module.exports = Brawn;
