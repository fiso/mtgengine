"use strict";
const Constants = require ("../../../Constants");
const SamiteHealerBase = require("../setATH/SamiteHealer");

class SamiteHealer extends SamiteHealerBase {
  constructor(game) {
    super(game, "Samite Healer", "Eighth Edition", "8ED");
  }
}

module.exports = SamiteHealer;
