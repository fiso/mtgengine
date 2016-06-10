"use strict";
const Constants = require ("../../../Constants");
const SamiteHealerBase = require("../setATH/SamiteHealer");

class SamiteHealer extends SamiteHealerBase {
  constructor (game) {
    super(game, "Samite Healer", "Fifth Edition", "5ED");
  }
}

module.exports = SamiteHealer;
