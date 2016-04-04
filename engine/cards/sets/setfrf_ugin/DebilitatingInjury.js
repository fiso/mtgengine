"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DebilitatingInjuryBase = require("../setKTK/DebilitatingInjury.js");

class DebilitatingInjury extends DebilitatingInjuryBase {
  constructor(game) {
    super(game, "Debilitating Injury", "Ugin's Fate promos", "FRF_UGIN");
  }
}

module.exports = DebilitatingInjury;
