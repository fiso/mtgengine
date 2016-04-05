"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ConfusionintheRanks extends UnimplementedCard {
  constructor(game) {
    super(game, "Confusion in the Ranks", "Mirrodin", "MRD");
  }
}

module.exports = ConfusionintheRanks;
