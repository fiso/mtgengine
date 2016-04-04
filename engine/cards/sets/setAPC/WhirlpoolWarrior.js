"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WhirlpoolWarrior extends Card {
  constructor(game) {
    super(game, "Whirlpool Warrior", "Apocalypse", "APC");
  }
}

module.exports = WhirlpoolWarrior;
