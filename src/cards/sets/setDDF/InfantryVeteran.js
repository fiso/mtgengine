"use strict";
const Constants = require ("../../../Constants");
const InfantryVeteranBase = require("../setIMA/InfantryVeteran");

class InfantryVeteran extends InfantryVeteranBase {
  constructor (game) {
    super(game, "Infantry Veteran", "Duel Decks: Elspeth vs. Tezzeret", "DDF");
  }
}

module.exports = InfantryVeteran;
