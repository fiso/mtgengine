"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TimberwatchElfBase = require("../setC14/TimberwatchElf.js");

class TimberwatchElf extends TimberwatchElfBase {
  constructor(game) {
    super(game, "Timberwatch Elf", "Duel Decks: Elves vs. Goblins", "EVG");
  }
}

module.exports = TimberwatchElf;
