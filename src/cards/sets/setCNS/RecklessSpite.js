"use strict";
const Constants = require ("../../../Constants");
const RecklessSpiteBase = require("../setE01/RecklessSpite");

class RecklessSpite extends RecklessSpiteBase {
  constructor (game) {
    super(game, "Reckless Spite", "Conspiracy", "CNS");
  }
}

module.exports = RecklessSpite;
