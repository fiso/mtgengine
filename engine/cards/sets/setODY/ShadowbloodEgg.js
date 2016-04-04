"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShadowbloodEgg extends UnimplementedCard {
  constructor(game) {
    super(game, "Shadowblood Egg", "Odyssey", "ODY");
  }
}

module.exports = ShadowbloodEgg;
