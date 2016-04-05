"use strict";
const Constants = require ("../../../Constants");
const DisenchantBase = require("../setATH/Disenchant");

class Disenchant extends DisenchantBase {
  constructor(game) {
    super(game, "Disenchant", "Tempest Remastered", "TPR");
  }
}

module.exports = Disenchant;
