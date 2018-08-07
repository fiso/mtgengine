"use strict";
const Constants = require ("../../../Constants");
const SkySpiritBase = require("../setCNS/SkySpirit");

class SkySpirit extends SkySpiritBase {
  constructor (game) {
    super(game, "Sky Spirit", "Duel Decks: Venser vs. Koth", "DDI");
  }
}

module.exports = SkySpirit;
