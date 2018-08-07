"use strict";
const Constants = require ("../../../Constants");
const ChildofNightBase = require("../setM19/ChildofNight");

class ChildofNight extends ChildofNightBase {
  constructor (game) {
    super(game, "Child of Night", "Duel Decks: Sorin vs. Tibalt", "DDK");
  }
}

module.exports = ChildofNight;
