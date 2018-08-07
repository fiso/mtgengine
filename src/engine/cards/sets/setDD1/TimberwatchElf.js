"use strict";
const Constants = require ("../../../Constants");
const TimberwatchElfBase = require("../setCMA/TimberwatchElf");

class TimberwatchElf extends TimberwatchElfBase {
  constructor (game) {
    super(game, "Timberwatch Elf", "Duel Decks: Elves vs. Goblins", "DD1");
  }
}

module.exports = TimberwatchElf;
