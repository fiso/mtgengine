"use strict";
const Constants = require ("../../../Constants");
const AetherizeBase = require("../setIMA/Aetherize");

class Aetherize extends AetherizeBase {
  constructor (game) {
    super(game, "Aetherize", "Duel Decks: Elspeth vs. Kiora", "DDO");
  }
}

module.exports = Aetherize;
