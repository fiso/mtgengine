"use strict";
const Constants = require ("../../../Constants");
const RubiniaSoulsingerBase = require("../setCMA/RubiniaSoulsinger");

class RubiniaSoulsinger extends RubiniaSoulsingerBase {
  constructor (game) {
    super(game, "Rubinia Soulsinger", "Magic Online Theme Decks", "TD0");
  }
}

module.exports = RubiniaSoulsinger;
