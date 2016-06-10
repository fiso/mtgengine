"use strict";
const Constants = require ("../../../Constants");
const MoorlandInquisitorBase = require("../setAVR/MoorlandInquisitor");

class MoorlandInquisitor extends MoorlandInquisitorBase {
  constructor (game) {
    super(game, "Moorland Inquisitor", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = MoorlandInquisitor;
