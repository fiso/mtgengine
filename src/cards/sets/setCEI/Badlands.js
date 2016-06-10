"use strict";
const Constants = require ("../../../Constants");
const BadlandsBase = require("../setCED/Badlands");

class Badlands extends BadlandsBase {
  constructor (game) {
    super(game, "Badlands", "International Collector's Edition", "CEI");
  }
}

module.exports = Badlands;
