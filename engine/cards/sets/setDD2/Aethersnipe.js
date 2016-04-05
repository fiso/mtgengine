"use strict";
const Constants = require ("../../../Constants");
const AethersnipeBase = require("../setDD3_JVC/Aethersnipe");

class Aethersnipe extends AethersnipeBase {
  constructor(game) {
    super(game, "Æthersnipe", "Duel Decks: Jace vs. Chandra", "DD2");
  }
}

module.exports = Aethersnipe;
