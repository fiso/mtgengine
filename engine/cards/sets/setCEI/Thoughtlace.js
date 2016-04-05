"use strict";
const Constants = require ("../../../Constants");
const ThoughtlaceBase = require("../setCED/Thoughtlace");

class Thoughtlace extends ThoughtlaceBase {
  constructor(game) {
    super(game, "Thoughtlace", "International Collector's Edition", "CEI");
  }
}

module.exports = Thoughtlace;
