"use strict";
const Constants = require ("../../../Constants");
const SkyshroudTrollBase = require("../setTMP/SkyshroudTroll");

class SkyshroudTroll extends SkyshroudTrollBase {
  constructor (game) {
    super(game, "Skyshroud Troll", "Tempest Remastered", "TPR");
  }
}

module.exports = SkyshroudTroll;
