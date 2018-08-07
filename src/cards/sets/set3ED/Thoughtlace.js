"use strict";
const Constants = require ("../../../Constants");
const ThoughtlaceBase = require("../set4ED/Thoughtlace");

class Thoughtlace extends ThoughtlaceBase {
  constructor (game) {
    super(game, "Thoughtlace", "Revised Edition", "3ED");
  }
}

module.exports = Thoughtlace;
