"use strict";
const Constants = require ("../../../Constants");
const SanctumGargoyleBase = require("../setC16/SanctumGargoyle");

class SanctumGargoyle extends SanctumGargoyleBase {
  constructor (game) {
    super(game, "Sanctum Gargoyle", "Shards of Alara", "ALA");
  }
}

module.exports = SanctumGargoyle;
