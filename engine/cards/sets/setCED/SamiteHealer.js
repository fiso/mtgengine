"use strict";
const Constants = require ("../../../Constants");
const SamiteHealerBase = require("../setATH/SamiteHealer");

class SamiteHealer extends SamiteHealerBase {
  constructor(game) {
    super(game, "Samite Healer", "Collector's Edition", "CED");
  }
}

module.exports = SamiteHealer;
