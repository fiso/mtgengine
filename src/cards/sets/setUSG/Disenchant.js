"use strict";
const Constants = require ("../../../Constants");
const DisenchantBase = require("../setATH/Disenchant");

class Disenchant extends DisenchantBase {
  constructor (game) {
    super(game, "Disenchant", "Urza's Saga", "USG");
  }
}

module.exports = Disenchant;
