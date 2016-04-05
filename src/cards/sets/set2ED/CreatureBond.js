"use strict";
const Constants = require ("../../../Constants");
const CreatureBondBase = require("../setCED/CreatureBond");

class CreatureBond extends CreatureBondBase {
  constructor(game) {
    super(game, "Creature Bond", "Unlimited Edition", "2ED");
  }
}

module.exports = CreatureBond;
