"use strict";
const Constants = require ("../../../Constants");
const DemonsJesterBase = require("../setDVD/DemonsJester");

class DemonsJester extends DemonsJesterBase {
  constructor (game) {
    super(game, "Demon's Jester", "Duel Decks: Divine vs. Demonic", "DDC");
  }
}

module.exports = DemonsJester;
