"use strict";
const Constants = require ("../../../Constants");
const ForceofNatureBase = require("../setME4/ForceofNature");

class ForceofNature extends ForceofNatureBase {
  constructor (game) {
    super(game, "Force of Nature", "Limited Edition Alpha", "LEA");
  }
}

module.exports = ForceofNature;
