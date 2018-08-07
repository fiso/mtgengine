"use strict";
const Constants = require ("../../../Constants");
const GoblinSledderBase = require("../setEVG/GoblinSledder");

class GoblinSledder extends GoblinSledderBase {
  constructor (game) {
    super(game, "Goblin Sledder", "World Championship Decks 2003", "WC03");
  }
}

module.exports = GoblinSledder;
