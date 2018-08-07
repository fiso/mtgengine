"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SkyshroudElf extends UnimplementedCard {
  constructor (game) {
    super(game, "Skyshroud Elf", "Tempest Remastered", "TPR");
  }
}

module.exports = SkyshroudElf;
