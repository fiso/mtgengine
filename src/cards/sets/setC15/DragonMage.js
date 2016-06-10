"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DragonMage extends UnimplementedCard {
  constructor (game) {
    super(game, "Dragon Mage", "Commander 2015", "C15");
  }
}

module.exports = DragonMage;
