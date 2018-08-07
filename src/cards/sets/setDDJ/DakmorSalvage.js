"use strict";
const Constants = require ("../../../Constants");
const DakmorSalvageBase = require("../setMMA/DakmorSalvage");

class DakmorSalvage extends DakmorSalvageBase {
  constructor (game) {
    super(game, "Dakmor Salvage", "Duel Decks: Izzet vs. Golgari", "DDJ");
  }
}

module.exports = DakmorSalvage;
