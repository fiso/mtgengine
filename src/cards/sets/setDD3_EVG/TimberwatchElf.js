"use strict";
const Constants = require ("../../../Constants");
const TimberwatchElfBase = require("../setC14/TimberwatchElf");

class TimberwatchElf extends TimberwatchElfBase {
  constructor (game) {
    super(game, "Timberwatch Elf", "Duel Decks Anthology, Elves vs. Goblins", "DD3_EVG");
  }
}

module.exports = TimberwatchElf;
