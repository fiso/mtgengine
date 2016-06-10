"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PhantomWarrior extends UnimplementedCard {
  constructor (game) {
    super(game, "Phantom Warrior", "Classic Sixth Edition", "6ED");
  }
}

module.exports = PhantomWarrior;
