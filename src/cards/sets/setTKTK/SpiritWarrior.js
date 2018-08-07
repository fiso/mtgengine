"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpiritWarrior extends UnimplementedCard {
  constructor (game) {
    super(game, "Spirit Warrior", "Khans of Tarkir Tokens", "TKTK");
  }
}

module.exports = SpiritWarrior;
