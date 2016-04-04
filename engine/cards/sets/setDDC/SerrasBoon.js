"use strict";
const Constants = require ("../../../Constants");
const SerrasBoonBase = require("../setDD3_DVD/SerrasBoon");

class SerrasBoon extends SerrasBoonBase {
  constructor(game) {
    super(game, "Serra's Boon", "Duel Decks: Divine vs. Demonic", "DDC");
  }
}

module.exports = SerrasBoon;
