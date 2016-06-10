"use strict";
const Constants = require ("../../../Constants");
const DemonsHornBase = require("../setDST/DemonsHorn");

class DemonsHorn extends DemonsHornBase {
  constructor (game) {
    super(game, "Demon's Horn", "Duel Decks Anthology, Divine vs. Demonic", "DD3_DVD");
  }
}

module.exports = DemonsHorn;
