"use strict";
const Constants = require ("../../../Constants");
const SkyshroudRangerBase = require("../set10E/SkyshroudRanger");

class SkyshroudRanger extends SkyshroudRangerBase {
  constructor (game) {
    super(game, "Skyshroud Ranger", "Tempest", "TMP");
  }
}

module.exports = SkyshroudRanger;
