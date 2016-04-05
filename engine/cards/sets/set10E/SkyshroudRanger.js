"use strict";
const Constants = require ("../../../Constants");
const SkyshroudRangerBase = require("../setTMP/SkyshroudRanger");

class SkyshroudRanger extends SkyshroudRangerBase {
  constructor(game) {
    super(game, "Skyshroud Ranger", "Tenth Edition", "10E");
  }
}

module.exports = SkyshroudRanger;
