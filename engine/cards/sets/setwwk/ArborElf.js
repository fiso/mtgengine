"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ArborElfBase = require("../setM13/ArborElf.js");

class ArborElf extends ArborElfBase {
  constructor(game) {
    super(game, "Arbor Elf", "Worldwake", "WWK");
  }
}

module.exports = ArborElf;
