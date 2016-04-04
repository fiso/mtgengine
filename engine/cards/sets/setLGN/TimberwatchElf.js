"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TimberwatchElfBase = require("../setC14/TimberwatchElf.js");

class TimberwatchElf extends TimberwatchElfBase {
  constructor(game) {
    super(game, "Timberwatch Elf", "Legions", "LGN");
  }
}

module.exports = TimberwatchElf;
