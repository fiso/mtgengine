"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BlizzardElemental extends UnimplementedCard {
  constructor(game) {
    super(game, "Blizzard Elemental", "Beatdown Box Set", "BTD");
  }
}

module.exports = BlizzardElemental;
