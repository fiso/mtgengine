"use strict";
const Constants = require ("../../../Constants");
const ThoughtlaceBase = require("../set4ED/Thoughtlace");

class Thoughtlace extends ThoughtlaceBase {
  constructor (game) {
    super(game, "Thoughtlace", "Intl. Collectors’ Edition", "CEI");
  }
}

module.exports = Thoughtlace;
