"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SpiritBase = require("../setDDQ/Spirit.js");

class Spirit extends SpiritBase {
  constructor(game) {
    super(game, "Spirit", "Duel Decks: Divine vs. Demonic", "DDC");
  }
}

module.exports = Spirit;
