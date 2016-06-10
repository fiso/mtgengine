"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BloodshedFever extends UnimplementedCard {
  constructor (game) {
    super(game, "Bloodshed Fever", "Shadowmoor", "SHM");
  }
}

module.exports = BloodshedFever;
