"use strict";
const Constants = require ("../../../Constants");
const LeyDruidBase = require("../setCED/LeyDruid");

class LeyDruid extends LeyDruidBase {
  constructor(game) {
    super(game, "Ley Druid", "Ninth Edition", "9ED");
  }
}

module.exports = LeyDruid;
