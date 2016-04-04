"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ParalyzeBase = require("../setCED/Paralyze.js");

class Paralyze extends ParalyzeBase {
  constructor(game) {
    super(game, "Paralyze", "International Collector's Edition", "CEI");
  }
}

module.exports = Paralyze;
