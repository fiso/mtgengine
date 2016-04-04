"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GempalmIncineratorBase = require("../setDD3_EVG/GempalmIncinerator.js");

class GempalmIncinerator extends GempalmIncineratorBase {
  constructor(game) {
    super(game, "Gempalm Incinerator", "Duel Decks: Elves vs. Goblins", "EVG");
  }
}

module.exports = GempalmIncinerator;
