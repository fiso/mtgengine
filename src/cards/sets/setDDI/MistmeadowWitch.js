"use strict";
const Constants = require ("../../../Constants");
const MistmeadowWitchBase = require("../setC13/MistmeadowWitch");

class MistmeadowWitch extends MistmeadowWitchBase {
  constructor (game) {
    super(game, "Mistmeadow Witch", "Duel Decks: Venser vs. Koth", "DDI");
  }
}

module.exports = MistmeadowWitch;
