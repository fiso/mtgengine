"use strict";
const Constants = require ("../../../Constants");
const CavalryPegasusBase = require("../setTHS/CavalryPegasus");

class CavalryPegasus extends CavalryPegasusBase {
  constructor (game) {
    super(game, "Cavalry Pegasus", "Duel Decks: Heroes vs. Monsters", "DDL");
  }
}

module.exports = CavalryPegasus;
