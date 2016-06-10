"use strict";
const Constants = require ("../../../Constants");
const JaceBelerenBase = require("../setDD3_JVC/JaceBeleren");

class JaceBeleren extends JaceBelerenBase {
  constructor (game) {
    super(game, "Jace Beleren", "Duel Decks: Jace vs. Chandra", "DD2");
  }
}

module.exports = JaceBeleren;
