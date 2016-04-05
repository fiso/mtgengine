"use strict";
const Constants = require ("../../../Constants");
const DarkRitualBase = require("../setBRB/DarkRitual");

class DarkRitual extends DarkRitualBase {
  constructor(game) {
    super(game, "Dark Ritual", "Duel Decks Anthology, Divine vs. Demonic", "DD3_DVD");
  }
}

module.exports = DarkRitual;
