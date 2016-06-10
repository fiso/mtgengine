"use strict";
const Constants = require ("../../../Constants");
const SamiteHealerBase = require("../setATH/SamiteHealer");

class SamiteHealer extends SamiteHealerBase {
  constructor (game) {
    super(game, "Samite Healer", "Fourth Edition", "4ED");
  }
}

module.exports = SamiteHealer;
