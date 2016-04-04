"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MoorlandInquisitorBase = require("../setAVR/MoorlandInquisitor.js");

class MoorlandInquisitor extends MoorlandInquisitorBase {
  constructor(game) {
    super(game, "Moorland Inquisitor", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = MoorlandInquisitor;
