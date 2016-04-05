"use strict";
const Constants = require ("../../../Constants");
const DemonsJesterBase = require("../setDIS/DemonsJester");

class DemonsJester extends DemonsJesterBase {
  constructor(game) {
    super(game, "Demon's Jester", "Duel Decks Anthology, Divine vs. Demonic", "DD3_DVD");
  }
}

module.exports = DemonsJester;
