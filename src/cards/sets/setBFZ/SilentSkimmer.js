"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SilentSkimmer extends UnimplementedCard {
  constructor(game) {
    super(game, "Silent Skimmer", "Battle for Zendikar", "BFZ");
  }
}

module.exports = SilentSkimmer;
