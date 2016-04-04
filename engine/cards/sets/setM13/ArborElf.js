"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ArborElf extends Card {
  constructor(game) {
    super(game, "Arbor Elf", "Magic 2013", "M13");
  }
}

module.exports = ArborElf;
