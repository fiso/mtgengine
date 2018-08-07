"use strict";
const Constants = require ("../../../Constants");
const TrollAsceticBase = require("../setCM2/TrollAscetic");

class TrollAscetic extends TrollAsceticBase {
  constructor (game) {
    super(game, "Troll Ascetic", "Duel Decks: Heroes vs. Monsters", "DDL");
  }
}

module.exports = TrollAscetic;
