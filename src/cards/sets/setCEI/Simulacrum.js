"use strict";
const Constants = require ("../../../Constants");
const SimulacrumBase = require("../setCED/Simulacrum");

class Simulacrum extends SimulacrumBase {
  constructor(game) {
    super(game, "Simulacrum", "International Collector's Edition", "CEI");
  }
}

module.exports = Simulacrum;
