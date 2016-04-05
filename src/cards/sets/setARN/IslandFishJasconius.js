"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IslandFishJasconius extends UnimplementedCard {
  constructor(game) {
    super(game, "Island Fish Jasconius", "Arabian Nights", "ARN");
  }
}

module.exports = IslandFishJasconius;
