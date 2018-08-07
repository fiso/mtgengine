"use strict";
const Constants = require ("../../../Constants");
const FaerieRogueBase = require("../setTMM2/FaerieRogue");

class FaerieRogue extends FaerieRogueBase {
  constructor (game) {
    super(game, "Faerie Rogue", "Shadowmoor Tokens", "TSHM");
  }
}

module.exports = FaerieRogue;
