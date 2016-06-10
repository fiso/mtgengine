"use strict";
const Constants = require ("../../../Constants");
const ForceofNatureBase = require("../setBTD/ForceofNature");

class ForceofNature extends ForceofNatureBase {
  constructor (game) {
    super(game, "Force of Nature", "Fourth Edition", "4ED");
  }
}

module.exports = ForceofNature;
