"use strict";
const Constants = require ("../../../Constants");
const LeyDruidBase = require("../setCED/LeyDruid");

class LeyDruid extends LeyDruidBase {
  constructor(game) {
    super(game, "Ley Druid", "Limited Edition Beta", "LEB");
  }
}

module.exports = LeyDruid;
