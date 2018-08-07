"use strict";
const Constants = require ("../../../Constants");
const LeoninBladetrapBase = require("../setCMA/LeoninBladetrap");

class LeoninBladetrap extends LeoninBladetrapBase {
  constructor (game) {
    super(game, "Leonin Bladetrap", "Mirrodin", "MRD");
  }
}

module.exports = LeoninBladetrap;
