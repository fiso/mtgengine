"use strict";
const Constants = require ("../../../Constants");
const DuelistsHeritageBase = require("../setCM2/DuelistsHeritage");

class DuelistsHeritage extends DuelistsHeritageBase {
  constructor (game) {
    super(game, "Duelist's Heritage", "You Make the Cube", "PZ2");
  }
}

module.exports = DuelistsHeritage;
