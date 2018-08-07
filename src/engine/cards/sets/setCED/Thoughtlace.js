"use strict";
const Constants = require ("../../../Constants");
const ThoughtlaceBase = require("../set4ED/Thoughtlace");

class Thoughtlace extends ThoughtlaceBase {
  constructor (game) {
    super(game, "Thoughtlace", "Collectors’ Edition", "CED");
  }
}

module.exports = Thoughtlace;
