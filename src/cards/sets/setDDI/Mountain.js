"use strict";
const Constants = require ("../../../Constants");
const MountainBase = require("../setATH/Mountain");

class Mountain extends MountainBase {
  constructor (game) {
    super(game, "Mountain", "Duel Decks: Venser vs. Koth", "DDI");
  }
}

module.exports = Mountain;
