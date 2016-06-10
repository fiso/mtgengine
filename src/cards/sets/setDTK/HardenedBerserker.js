"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HardenedBerserker extends UnimplementedCard {
  constructor (game) {
    super(game, "Hardened Berserker", "Dragons of Tarkir", "DTK");
  }
}

module.exports = HardenedBerserker;
