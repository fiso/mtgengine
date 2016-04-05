"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DraconicRoar extends UnimplementedCard {
  constructor(game) {
    super(game, "Draconic Roar", "Dragons of Tarkir", "DTK");
  }
}

module.exports = DraconicRoar;
