"use strict";
const Constants = require ("../../../Constants");
const FreewindEquenautBase = require("../setDIS/FreewindEquenaut");

class FreewindEquenaut extends FreewindEquenautBase {
  constructor(game) {
    super(game, "Freewind Equenaut", "Duel Decks: Heroes vs. Monsters", "DDL");
  }
}

module.exports = FreewindEquenaut;
