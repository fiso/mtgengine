"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DragonsClaw extends UnimplementedCard {
  constructor (game) {
    super(game, "Dragon's Claw", "Darksteel", "DST");
  }
}

module.exports = DragonsClaw;
