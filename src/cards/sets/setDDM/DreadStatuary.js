"use strict";
const Constants = require ("../../../Constants");
const DreadStatuaryBase = require("../setCN2/DreadStatuary");

class DreadStatuary extends DreadStatuaryBase {
  constructor (game) {
    super(game, "Dread Statuary", "Duel Decks: Jace vs. Vraska", "DDM");
  }
}

module.exports = DreadStatuary;
