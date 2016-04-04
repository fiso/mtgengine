"use strict";
const Constants = require ("../../../Constants");
const ÆthersnipeBase = require("../setDD3_JVC/Æthersnipe");

class Æthersnipe extends ÆthersnipeBase {
  constructor(game) {
    super(game, "Æthersnipe", "Duel Decks: Jace vs. Chandra", "DD2");
  }
}

module.exports = Æthersnipe;
