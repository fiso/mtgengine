"use strict";
const Constants = require ("../../../Constants");
const ScreechingHarpyBase = require("../setTPR/ScreechingHarpy");

class ScreechingHarpy extends ScreechingHarpyBase {
  constructor (game) {
    super(game, "Screeching Harpy", "Tempest", "TMP");
  }
}

module.exports = ScreechingHarpy;
