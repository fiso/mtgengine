"use strict";
const Constants = require ("../../../Constants");
const AetherizeBase = require("../setC15/Aetherize");

class Aetherize extends AetherizeBase {
  constructor(game) {
    super(game, "Ætherize", "Duel Decks: Elspeth vs. Kiora", "DDO");
  }
}

module.exports = Aetherize;
