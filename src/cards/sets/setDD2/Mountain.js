"use strict";
const Constants = require ("../../../Constants");
const MountainBase = require("../setATH/Mountain");

class Mountain extends MountainBase {
  constructor (game) {
    super(game, "Mountain", "Duel Decks: Jace vs. Chandra", "DD2");
  }
}

module.exports = Mountain;
