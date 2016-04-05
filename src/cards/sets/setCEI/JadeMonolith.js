"use strict";
const Constants = require ("../../../Constants");
const JadeMonolithBase = require("../set6ED/JadeMonolith");

class JadeMonolith extends JadeMonolithBase {
  constructor(game) {
    super(game, "Jade Monolith", "International Collector's Edition", "CEI");
  }
}

module.exports = JadeMonolith;
