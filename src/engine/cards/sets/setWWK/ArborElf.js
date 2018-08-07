"use strict";
const Constants = require ("../../../Constants");
const ArborElfBase = require("../setA25/ArborElf");

class ArborElf extends ArborElfBase {
  constructor (game) {
    super(game, "Arbor Elf", "Worldwake", "WWK");
  }
}

module.exports = ArborElf;
