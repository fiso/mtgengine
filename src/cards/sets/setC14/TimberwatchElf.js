"use strict";
const Constants = require ("../../../Constants");
const TimberwatchElfBase = require("../setCMA/TimberwatchElf");

class TimberwatchElf extends TimberwatchElfBase {
  constructor (game) {
    super(game, "Timberwatch Elf", "Commander 2014", "C14");
  }
}

module.exports = TimberwatchElf;
