"use strict";
const Constants = require ("../../../Constants");
const SoulSummonsBase = require("../setFRF/SoulSummons");

class SoulSummons extends SoulSummonsBase {
  constructor (game) {
    super(game, "Soul Summons", "Magic Online Promos", "PRM");
  }
}

module.exports = SoulSummons;
