"use strict";
const Constants = require ("../../../Constants");
const MistmeadowWitchBase = require("../setCMA/MistmeadowWitch");

class MistmeadowWitch extends MistmeadowWitchBase {
  constructor (game) {
    super(game, "Mistmeadow Witch", "Magic Online Theme Decks", "TD0");
  }
}

module.exports = MistmeadowWitch;
