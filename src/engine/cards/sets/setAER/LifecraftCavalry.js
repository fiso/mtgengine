"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LifecraftCavalry extends UnimplementedCard {
  constructor (game) {
    super(game, "Lifecraft Cavalry", "Aether Revolt", "AER");
  }
}

module.exports = LifecraftCavalry;
