"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ScreechingHarpyBase = require("../setTMP/ScreechingHarpy.js");

class ScreechingHarpy extends ScreechingHarpyBase {
  constructor(game) {
    super(game, "Screeching Harpy", "Tempest Remastered", "TPR");
  }
}

module.exports = ScreechingHarpy;
