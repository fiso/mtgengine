"use strict";
const Constants = require ("../../../Constants");
const DisenchantBase = require("../setATH/Disenchant");

class Disenchant extends DisenchantBase {
  constructor (game) {
    super(game, "Disenchant", "Masters Edition III", "ME3");
  }
}

module.exports = Disenchant;
