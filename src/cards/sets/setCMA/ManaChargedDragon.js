"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ManaChargedDragon extends UnimplementedCard {
  constructor (game) {
    super(game, "Mana-Charged Dragon", "Commander Anthology", "CMA");
  }
}

module.exports = ManaChargedDragon;
