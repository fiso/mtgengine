"use strict";
const Constants = require ("../../../Constants");
const FireblastBase = require("../setDD3_JVC/Fireblast");

class Fireblast extends FireblastBase {
  constructor (game) {
    super(game, "Fireblast", "Duel Decks: Jace vs. Chandra", "DD2");
  }
}

module.exports = Fireblast;
