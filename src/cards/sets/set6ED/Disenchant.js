"use strict";
const Constants = require ("../../../Constants");
const DisenchantBase = require("../setA25/Disenchant");

class Disenchant extends DisenchantBase {
  constructor (game) {
    super(game, "Disenchant", "Classic Sixth Edition", "6ED");
  }
}

module.exports = Disenchant;
