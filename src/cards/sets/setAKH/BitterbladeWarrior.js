"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BitterbladeWarrior extends UnimplementedCard {
  constructor (game) {
    super(game, "Bitterblade Warrior", "Amonkhet", "AKH");
  }
}

module.exports = BitterbladeWarrior;
