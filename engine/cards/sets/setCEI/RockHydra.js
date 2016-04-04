"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RockHydraBase = require("../setCED/RockHydra.js");

class RockHydra extends RockHydraBase {
  constructor(game) {
    super(game, "Rock Hydra", "International Collector's Edition", "CEI");
  }
}

module.exports = RockHydra;
