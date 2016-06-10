"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LuxCannon extends UnimplementedCard {
  constructor (game) {
    super(game, "Lux Cannon", "Scars of Mirrodin", "SOM");
  }
}

module.exports = LuxCannon;
