"use strict";
const Constants = require ("../../../Constants");
const MountainBase = require("../setC18/Mountain");

class Mountain extends MountainBase {
  constructor (game) {
    super(game, "Mountain", "Duel Decks: Jace vs. Chandra", "DD2");
  }
}

module.exports = Mountain;