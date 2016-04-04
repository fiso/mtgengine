"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SunbladeElf extends UnimplementedCard {
  constructor(game) {
    super(game, "Sunblade Elf", "Magic 2015 Core Set", "M15");
  }
}

module.exports = SunbladeElf;
