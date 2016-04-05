"use strict";
const Constants = require ("../../../Constants");
const GoblinWarchiefBase = require("../setDD3_EVG/GoblinWarchief");

class GoblinWarchief extends GoblinWarchiefBase {
  constructor(game) {
    super(game, "Goblin Warchief", "Friday Night Magic", "pFNM");
  }
}

module.exports = GoblinWarchief;
