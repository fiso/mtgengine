"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LightningTalons extends UnimplementedCard {
  constructor (game) {
    super(game, "Lightning Talons", "Battlebond", "BBD");
  }
}

module.exports = LightningTalons;
