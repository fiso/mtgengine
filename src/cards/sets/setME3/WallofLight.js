"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WallofLight extends UnimplementedCard {
  constructor (game) {
    super(game, "Wall of Light", "Masters Edition III", "ME3");
  }
}

module.exports = WallofLight;
