"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ThoughtlaceBase = require("../setCED/Thoughtlace.js");

class Thoughtlace extends ThoughtlaceBase {
  constructor(game) {
    super(game, "Thoughtlace", "International Collector's Edition", "CEI");
  }
}

module.exports = Thoughtlace;
