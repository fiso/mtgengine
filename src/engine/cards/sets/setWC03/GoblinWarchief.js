"use strict";
const Constants = require ("../../../Constants");
const GoblinWarchiefBase = require("../setDOM/GoblinWarchief");

class GoblinWarchief extends GoblinWarchiefBase {
  constructor (game) {
    super(game, "Goblin Warchief", "World Championship Decks 2003", "WC03");
  }
}

module.exports = GoblinWarchief;
