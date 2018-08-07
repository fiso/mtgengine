"use strict";
const Constants = require ("../../../Constants");
const SwampBase = require("../setC18/Swamp");

class Swamp extends SwampBase {
  constructor (game) {
    super(game, "Swamp", "Magic Premiere Shop 2008", "PMPS08");
  }
}

module.exports = Swamp;
