"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SunbladeElf extends Card {
  constructor(game) {
    super(game, "Sunblade Elf", "Magic 2015 Core Set", "M15");
  }
}

module.exports = SunbladeElf;
