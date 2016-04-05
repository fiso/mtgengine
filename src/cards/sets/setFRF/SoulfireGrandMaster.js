"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SoulfireGrandMaster extends UnimplementedCard {
  constructor(game) {
    super(game, "Soulfire Grand Master", "Fate Reforged", "FRF");
  }
}

module.exports = SoulfireGrandMaster;
