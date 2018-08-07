"use strict";
const Constants = require ("../../../Constants");
const WhirlpoolWarriorBase = require("../setPCA/WhirlpoolWarrior");

class WhirlpoolWarrior extends WhirlpoolWarriorBase {
  constructor (game) {
    super(game, "Whirlpool Warrior", "Planechase 2012", "PC2");
  }
}

module.exports = WhirlpoolWarrior;
