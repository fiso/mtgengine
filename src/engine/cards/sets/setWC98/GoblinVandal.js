"use strict";
const Constants = require ("../../../Constants");
const GoblinVandalBase = require("../setPRM/GoblinVandal");

class GoblinVandal extends GoblinVandalBase {
  constructor (game) {
    super(game, "Goblin Vandal", "World Championship Decks 1998", "WC98");
  }
}

module.exports = GoblinVandal;
