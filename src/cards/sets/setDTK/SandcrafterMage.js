"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SandcrafterMage extends UnimplementedCard {
  constructor(game) {
    super(game, "Sandcrafter Mage", "Dragons of Tarkir", "DTK");
  }
}

module.exports = SandcrafterMage;
