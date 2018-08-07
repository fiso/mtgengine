"use strict";
const Constants = require ("../../../Constants");
const FaerieRogueBase = require("../setTMM2/FaerieRogue");

class FaerieRogue extends FaerieRogueBase {
  constructor (game) {
    super(game, "Faerie Rogue", "Modern Masters Tokens", "TMMA");
  }
}

module.exports = FaerieRogue;
