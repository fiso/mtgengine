"use strict";
const Constants = require ("../../../Constants");
const AncientGrudgeBase = require("../setMM3/AncientGrudge");

class AncientGrudge extends AncientGrudgeBase {
  constructor (game) {
    super(game, "Ancient Grudge", "Magic Online Theme Decks", "TD0");
  }
}

module.exports = AncientGrudge;
