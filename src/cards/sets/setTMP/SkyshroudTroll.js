"use strict";
const Constants = require ("../../../Constants");
const SkyshroudTrollBase = require("../setTPR/SkyshroudTroll");

class SkyshroudTroll extends SkyshroudTrollBase {
  constructor (game) {
    super(game, "Skyshroud Troll", "Tempest", "TMP");
  }
}

module.exports = SkyshroudTroll;
