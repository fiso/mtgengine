"use strict";
const Constants = require ("../../../Constants");
const DebilitatingInjuryBase = require("../setUGIN/DebilitatingInjury");

class DebilitatingInjury extends DebilitatingInjuryBase {
  constructor (game) {
    super(game, "Debilitating Injury", "Magic Online Promos", "PRM");
  }
}

module.exports = DebilitatingInjury;
