"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SkyshroudElf extends Card {
  constructor(game) {
    super(game, "Skyshroud Elf", "Tempest", "TMP");
  }
}

module.exports = SkyshroudElf;
