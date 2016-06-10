"use strict";
const Constants = require ("../../../Constants");
const DemonsHornBase = require("../setDST/DemonsHorn");

class DemonsHorn extends DemonsHornBase {
  constructor (game) {
    super(game, "Demon's Horn", "Duel Decks: Divine vs. Demonic", "DDC");
  }
}

module.exports = DemonsHorn;
