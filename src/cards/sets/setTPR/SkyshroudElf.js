"use strict";
const Constants = require ("../../../Constants");
const SkyshroudElfBase = require("../setTMP/SkyshroudElf");

class SkyshroudElf extends SkyshroudElfBase {
  constructor(game) {
    super(game, "Skyshroud Elf", "Tempest Remastered", "TPR");
  }
}

module.exports = SkyshroudElf;
