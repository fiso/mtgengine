"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DefiantElf extends Card {
  constructor(game) {
    super(game, "Defiant Elf", "Legions", "LGN");
  }
}

module.exports = DefiantElf;
