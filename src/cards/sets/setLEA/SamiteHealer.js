"use strict";
const Constants = require ("../../../Constants");
const SamiteHealerBase = require("../setATH/SamiteHealer");

class SamiteHealer extends SamiteHealerBase {
  constructor (game) {
    super(game, "Samite Healer", "Limited Edition Alpha", "LEA");
  }
}

module.exports = SamiteHealer;
