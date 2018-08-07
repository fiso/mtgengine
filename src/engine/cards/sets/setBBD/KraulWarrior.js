"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KraulWarrior extends UnimplementedCard {
  constructor (game) {
    super(game, "Kraul Warrior", "Battlebond", "BBD");
  }
}

module.exports = KraulWarrior;
