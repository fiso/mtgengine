"use strict";
const Constants = require ("../../../Constants");
const LeyDruidBase = require("../setCED/LeyDruid");

class LeyDruid extends LeyDruidBase {
  constructor (game) {
    super(game, "Ley Druid", "International Collector's Edition", "CEI");
  }
}

module.exports = LeyDruid;
