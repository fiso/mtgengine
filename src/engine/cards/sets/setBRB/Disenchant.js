"use strict";
const Constants = require ("../../../Constants");
const DisenchantBase = require("../setA25/Disenchant");

class Disenchant extends DisenchantBase {
  constructor (game) {
    super(game, "Disenchant", "Battle Royale Box Set", "BRB");
  }
}

module.exports = Disenchant;
