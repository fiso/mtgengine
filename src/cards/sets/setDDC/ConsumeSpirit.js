"use strict";
const Constants = require ("../../../Constants");
const ConsumeSpiritBase = require("../setDVD/ConsumeSpirit");

class ConsumeSpirit extends ConsumeSpiritBase {
  constructor (game) {
    super(game, "Consume Spirit", "Duel Decks: Divine vs. Demonic", "DDC");
  }
}

module.exports = ConsumeSpirit;
