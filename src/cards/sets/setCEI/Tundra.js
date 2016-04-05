"use strict";
const Constants = require ("../../../Constants");
const TundraBase = require("../setCED/Tundra");

class Tundra extends TundraBase {
  constructor(game) {
    super(game, "Tundra", "International Collector's Edition", "CEI");
  }
}

module.exports = Tundra;
