"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChaosWand extends UnimplementedCard {
  constructor (game) {
    super(game, "Chaos Wand", "Core Set 2019", "M19");
  }
}

module.exports = ChaosWand;
