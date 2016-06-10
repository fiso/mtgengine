"use strict";
const Constants = require ("../../../Constants");
const AcidicSlimeBase = require("../setC13/AcidicSlime");

class AcidicSlime extends AcidicSlimeBase {
  constructor (game) {
    super(game, "Acidic Slime", "Commander 2015", "C15");
  }
}

module.exports = AcidicSlime;
