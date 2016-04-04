"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WhirlpoolWarriorBase = require("../setAPC/WhirlpoolWarrior.js");

class WhirlpoolWarrior extends WhirlpoolWarriorBase {
  constructor(game) {
    super(game, "Whirlpool Warrior", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = WhirlpoolWarrior;
