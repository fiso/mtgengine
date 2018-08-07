"use strict";
const Constants = require ("../../../Constants");
const LeyDruidBase = require("../set9ED/LeyDruid");

class LeyDruid extends LeyDruidBase {
  constructor (game) {
    super(game, "Ley Druid", "Limited Edition Alpha", "LEA");
  }
}

module.exports = LeyDruid;
