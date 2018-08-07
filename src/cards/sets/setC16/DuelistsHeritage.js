"use strict";
const Constants = require ("../../../Constants");
const DuelistsHeritageBase = require("../setCM2/DuelistsHeritage");

class DuelistsHeritage extends DuelistsHeritageBase {
  constructor (game) {
    super(game, "Duelist's Heritage", "Commander 2016", "C16");
  }
}

module.exports = DuelistsHeritage;
