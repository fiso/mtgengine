"use strict";
const Constants = require ("../../../Constants");
const CreatureBondBase = require("../set4ED/CreatureBond");

class CreatureBond extends CreatureBondBase {
  constructor (game) {
    super(game, "Creature Bond", "Collectors’ Edition", "CED");
  }
}

module.exports = CreatureBond;
