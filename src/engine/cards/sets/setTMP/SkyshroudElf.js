"use strict";
const Constants = require ("../../../Constants");
const SkyshroudElfBase = require("../setTPR/SkyshroudElf");

class SkyshroudElf extends SkyshroudElfBase {
  constructor (game) {
    super(game, "Skyshroud Elf", "Tempest", "TMP");
  }
}

module.exports = SkyshroudElf;
