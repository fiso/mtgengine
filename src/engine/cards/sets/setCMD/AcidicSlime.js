"use strict";
const Constants = require ("../../../Constants");
const AcidicSlimeBase = require("../setC18/AcidicSlime");

class AcidicSlime extends AcidicSlimeBase {
  constructor (game) {
    super(game, "Acidic Slime", "Commander 2011", "CMD");
  }
}

module.exports = AcidicSlime;
