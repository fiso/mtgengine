"use strict";
const Constants = require ("../../../Constants");
const RecklessSpiteBase = require("../setE01/RecklessSpite");

class RecklessSpite extends RecklessSpiteBase {
  constructor (game) {
    super(game, "Reckless Spite", "Commander 2013", "C13");
  }
}

module.exports = RecklessSpite;
