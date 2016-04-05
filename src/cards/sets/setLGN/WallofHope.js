"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WallofHope extends UnimplementedCard {
  constructor(game) {
    super(game, "Wall of Hope", "Legions", "LGN");
  }
}

module.exports = WallofHope;
