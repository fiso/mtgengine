"use strict";
const Constants = require ("../../../Constants");
const NewBenaliaBase = require("../setC13/NewBenalia");

class NewBenalia extends NewBenaliaBase {
  constructor(game) {
    super(game, "New Benalia", "Duel Decks: Venser vs. Koth", "DDI");
  }
}

module.exports = NewBenalia;
