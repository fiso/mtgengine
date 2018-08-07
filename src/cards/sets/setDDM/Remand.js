"use strict";
const Constants = require ("../../../Constants");
const RemandBase = require("../setMM2/Remand");

class Remand extends RemandBase {
  constructor (game) {
    super(game, "Remand", "Duel Decks: Jace vs. Vraska", "DDM");
  }
}

module.exports = Remand;
