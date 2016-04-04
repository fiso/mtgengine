"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const IslandSanctuaryBase = require("../setCED/IslandSanctuary.js");

class IslandSanctuary extends IslandSanctuaryBase {
  constructor(game) {
    super(game, "Island Sanctuary", "International Collector's Edition", "CEI");
  }
}

module.exports = IslandSanctuary;
