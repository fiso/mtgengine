"use strict";
const Constants = require ("../../../Constants");
const DisenchantBase = require("../setATH/Disenchant");

class Disenchant extends DisenchantBase {
  constructor(game) {
    super(game, "Disenchant", "Starter 2000", "S00");
  }
}

module.exports = Disenchant;
