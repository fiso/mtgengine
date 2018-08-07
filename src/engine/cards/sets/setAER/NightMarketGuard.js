"use strict";
const Constants = require ("../../../Constants");
const NightMarketGuardBase = require("../setBBD/NightMarketGuard");

class NightMarketGuard extends NightMarketGuardBase {
  constructor (game) {
    super(game, "Night Market Guard", "Aether Revolt", "AER");
  }
}

module.exports = NightMarketGuard;
