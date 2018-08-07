"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PhantomWarrior extends UnimplementedCard {
  constructor (game) {
    super(game, "Phantom Warrior", "Battlebond", "BBD");
  }
}

module.exports = PhantomWarrior;
