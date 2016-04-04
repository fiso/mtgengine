"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SanctumGargoyleBase = require("../setARC/SanctumGargoyle.js");

class SanctumGargoyle extends SanctumGargoyleBase {
  constructor(game) {
    super(game, "Sanctum Gargoyle", "Shards of Alara", "ALA");
  }
}

module.exports = SanctumGargoyle;
