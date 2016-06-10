"use strict";
const Constants = require ("../../../Constants");
const DisenchantBase = require("../setATH/Disenchant");

class Disenchant extends DisenchantBase {
  constructor (game) {
    super(game, "Disenchant", "Ice Age", "ICE");
  }
}

module.exports = Disenchant;
