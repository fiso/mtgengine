"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LeyDruidBase = require("../setCED/LeyDruid.js");

class LeyDruid extends LeyDruidBase {
  constructor(game) {
    super(game, "Ley Druid", "International Collector's Edition", "CEI");
  }
}

module.exports = LeyDruid;
