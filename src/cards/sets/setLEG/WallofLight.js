"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WallofLight extends UnimplementedCard {
  constructor(game) {
    super(game, "Wall of Light", "Legends", "LEG");
  }
}

module.exports = WallofLight;
