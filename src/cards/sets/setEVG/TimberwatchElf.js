"use strict";
const Constants = require ("../../../Constants");
const TimberwatchElfBase = require("../setCMA/TimberwatchElf");

class TimberwatchElf extends TimberwatchElfBase {
  constructor (game) {
    super(game, "Timberwatch Elf", "Duel Decks Anthology: Elves vs. Goblins", "EVG");
  }
}

module.exports = TimberwatchElf;
