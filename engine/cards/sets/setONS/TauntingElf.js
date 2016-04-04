"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TauntingElf extends Card {
  constructor(game) {
    super(game, "Taunting Elf", "Onslaught", "ONS");
  }
}

module.exports = TauntingElf;
