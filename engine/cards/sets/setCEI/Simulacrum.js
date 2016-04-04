"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SimulacrumBase = require("../setCED/Simulacrum.js");

class Simulacrum extends SimulacrumBase {
  constructor(game) {
    super(game, "Simulacrum", "International Collector's Edition", "CEI");
  }
}

module.exports = Simulacrum;
