"use strict";
const Constants = require ("../../../Constants");
const ForceofNatureBase = require("../setME4/ForceofNature");

class ForceofNature extends ForceofNatureBase {
  constructor (game) {
    super(game, "Force of Nature", "Summer Magic / Edgar", "SUM");
  }
}

module.exports = ForceofNature;