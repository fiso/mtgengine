"use strict";
const Constants = require ("../../../Constants");
const RevivingVaporsBase = require("../setVMA/RevivingVapors");

class RevivingVapors extends RevivingVaporsBase {
  constructor (game) {
    super(game, "Reviving Vapors", "Invasion", "INV");
  }
}

module.exports = RevivingVapors;
