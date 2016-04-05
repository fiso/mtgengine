"use strict";
const Constants = require ("../../../Constants");
const ThoughtlaceBase = require("../setCED/Thoughtlace");

class Thoughtlace extends ThoughtlaceBase {
  constructor(game) {
    super(game, "Thoughtlace", "Fourth Edition", "4ED");
  }
}

module.exports = Thoughtlace;
