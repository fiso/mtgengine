"use strict";
const Constants = require ("../../../Constants");
const LeyDruidBase = require("../set9ED/LeyDruid");

class LeyDruid extends LeyDruidBase {
  constructor (game) {
    super(game, "Ley Druid", "Collectors’ Edition", "CED");
  }
}

module.exports = LeyDruid;
