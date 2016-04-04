"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WallofGlare extends UnimplementedCard {
  constructor(game) {
    super(game, "Wall of Glare", "Urza's Destiny", "UDS");
  }
}

module.exports = WallofGlare;
