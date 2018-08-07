"use strict";
const Constants = require ("../../../Constants");
const GoblinCharbelcherBase = require("../setDDT/GoblinCharbelcher");

class GoblinCharbelcher extends GoblinCharbelcherBase {
  constructor (game) {
    super(game, "Goblin Charbelcher", "World Championship Decks 2004", "WC04");
  }
}

module.exports = GoblinCharbelcher;
