"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LightningBerserker extends UnimplementedCard {
  constructor (game) {
    super(game, "Lightning Berserker", "Dragons of Tarkir", "DTK");
  }
}

module.exports = LightningBerserker;
