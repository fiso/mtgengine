"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SkyriderElf extends Card {
  constructor(game) {
    super(game, "Skyrider Elf", "Battle for Zendikar", "BFZ");
  }
}

module.exports = SkyriderElf;
