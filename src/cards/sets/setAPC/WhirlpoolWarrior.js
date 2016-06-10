"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WhirlpoolWarrior extends UnimplementedCard {
  constructor (game) {
    super(game, "Whirlpool Warrior", "Apocalypse", "APC");
  }
}

module.exports = WhirlpoolWarrior;
