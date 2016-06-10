"use strict";
const Constants = require ("../../../Constants");
const RevivingVaporsBase = require("../setINV/RevivingVapors");

class RevivingVapors extends RevivingVaporsBase {
  constructor (game) {
    super(game, "Reviving Vapors", "Vintage Masters", "VMA");
  }
}

module.exports = RevivingVapors;
