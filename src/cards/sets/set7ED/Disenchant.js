"use strict";
const Constants = require ("../../../Constants");
const DisenchantBase = require("../setA25/Disenchant");

class Disenchant extends DisenchantBase {
  constructor (game) {
    super(game, "Disenchant", "Seventh Edition", "7ED");
  }
}

module.exports = Disenchant;
