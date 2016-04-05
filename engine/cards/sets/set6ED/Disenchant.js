"use strict";
const Constants = require ("../../../Constants");
const DisenchantBase = require("../setATH/Disenchant");

class Disenchant extends DisenchantBase {
  constructor(game) {
    super(game, "Disenchant", "Classic Sixth Edition", "6ED");
  }
}

module.exports = Disenchant;
