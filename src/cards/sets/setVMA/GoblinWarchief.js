"use strict";
const Constants = require ("../../../Constants");
const GoblinWarchiefBase = require("../setDD3_EVG/GoblinWarchief");

class GoblinWarchief extends GoblinWarchiefBase {
  constructor (game) {
    super(game, "Goblin Warchief", "Vintage Masters", "VMA");
  }
}

module.exports = GoblinWarchief;
