"use strict";
const Constants = require ("../../../Constants");
const GangofDevilsBase = require("../setAVR/GangofDevils");

class GangofDevils extends GangofDevilsBase {
  constructor (game) {
    super(game, "Gang of Devils", "Duel Decks: Sorin vs. Tibalt", "DDK");
  }
}

module.exports = GangofDevils;
