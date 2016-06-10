"use strict";
const Constants = require ("../../../Constants");
const AcidicSlimeBase = require("../setC13/AcidicSlime");

class AcidicSlime extends AcidicSlimeBase {
  constructor (game) {
    super(game, "Acidic Slime", "Friday Night Magic", "pFNM");
  }
}

module.exports = AcidicSlime;
