"use strict";
const Constants = require ("../../../Constants");
const StormElementalBase = require("../setME2/StormElemental");

class StormElemental extends StormElementalBase {
  constructor (game) {
    super(game, "Storm Elemental", "Coldsnap Theme Decks", "CST");
  }
}

module.exports = StormElemental;
