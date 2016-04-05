"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PiousWarrior extends UnimplementedCard {
  constructor(game) {
    super(game, "Pious Warrior", "Mercadian Masques", "MMQ");
  }
}

module.exports = PiousWarrior;
