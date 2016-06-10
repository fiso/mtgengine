"use strict";
const Constants = require ("../../../Constants");
const ScreechingHarpyBase = require("../setTMP/ScreechingHarpy");

class ScreechingHarpy extends ScreechingHarpyBase {
  constructor (game) {
    super(game, "Screeching Harpy", "Tempest Remastered", "TPR");
  }
}

module.exports = ScreechingHarpy;
