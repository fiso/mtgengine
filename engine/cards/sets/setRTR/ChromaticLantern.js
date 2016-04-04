"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChromaticLantern extends UnimplementedCard {
  constructor(game) {
    super(game, "Chromatic Lantern", "Return to Ravnica", "RTR");
  }
}

module.exports = ChromaticLantern;
