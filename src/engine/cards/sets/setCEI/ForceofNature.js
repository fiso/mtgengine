"use strict";
const Constants = require ("../../../Constants");
const ForceofNatureBase = require("../setME4/ForceofNature");

class ForceofNature extends ForceofNatureBase {
  constructor (game) {
    super(game, "Force of Nature", "Intl. Collectors’ Edition", "CEI");
  }
}

module.exports = ForceofNature;
