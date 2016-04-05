"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TrenchingSteed extends UnimplementedCard {
  constructor(game) {
    super(game, "Trenching Steed", "Prophecy", "PCY");
  }
}

module.exports = TrenchingSteed;
