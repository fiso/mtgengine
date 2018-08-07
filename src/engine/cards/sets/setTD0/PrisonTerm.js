"use strict";
const Constants = require ("../../../Constants");
const PrisonTermBase = require("../setCMD/PrisonTerm");

class PrisonTerm extends PrisonTermBase {
  constructor (game) {
    super(game, "Prison Term", "Magic Online Theme Decks", "TD0");
  }
}

module.exports = PrisonTerm;
