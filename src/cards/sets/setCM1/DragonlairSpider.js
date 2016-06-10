"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DragonlairSpider extends UnimplementedCard {
  constructor (game) {
    super(game, "Dragonlair Spider", "Commander's Arsenal", "CM1");
  }
}

module.exports = DragonlairSpider;
