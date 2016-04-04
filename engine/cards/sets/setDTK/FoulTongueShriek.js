"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FoulTongueShriek extends UnimplementedCard {
  constructor(game) {
    super(game, "Foul-Tongue Shriek", "Dragons of Tarkir", "DTK");
  }
}

module.exports = FoulTongueShriek;
