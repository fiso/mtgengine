"use strict";
const Constants = require ("../../../Constants");
const LeoninBladetrapBase = require("../setCMA/LeoninBladetrap");

class LeoninBladetrap extends LeoninBladetrapBase {
  constructor (game) {
    super(game, "Leonin Bladetrap", "Commander 2013", "C13");
  }
}

module.exports = LeoninBladetrap;
