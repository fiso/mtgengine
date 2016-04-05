"use strict";
const Constants = require ("../../../Constants");
const RecklessSpiteBase = require("../setC13/RecklessSpite");

class RecklessSpite extends RecklessSpiteBase {
  constructor(game) {
    super(game, "Reckless Spite", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = RecklessSpite;
