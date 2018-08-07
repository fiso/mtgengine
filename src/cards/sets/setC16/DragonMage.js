"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DragonMage extends UnimplementedCard {
  constructor (game) {
    super(game, "Dragon Mage", "Commander 2016", "C16");
  }
}

module.exports = DragonMage;
