"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DarkBanishingBase = require("../setCST/DarkBanishing.js");

class DarkBanishing extends DarkBanishingBase {
  constructor(game) {
    super(game, "Dark Banishing", "Duel Decks: Divine vs. Demonic", "DDC");
  }
}

module.exports = DarkBanishing;
