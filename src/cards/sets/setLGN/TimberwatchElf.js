"use strict";
const Constants = require ("../../../Constants");
const TimberwatchElfBase = require("../setC14/TimberwatchElf");

class TimberwatchElf extends TimberwatchElfBase {
  constructor (game) {
    super(game, "Timberwatch Elf", "Legions", "LGN");
  }
}

module.exports = TimberwatchElf;
