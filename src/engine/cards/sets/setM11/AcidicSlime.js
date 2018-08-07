"use strict";
const Constants = require ("../../../Constants");
const AcidicSlimeBase = require("../setC18/AcidicSlime");

class AcidicSlime extends AcidicSlimeBase {
  constructor (game) {
    super(game, "Acidic Slime", "Magic 2011", "M11");
  }
}

module.exports = AcidicSlime;
