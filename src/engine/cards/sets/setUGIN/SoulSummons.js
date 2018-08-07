"use strict";
const Constants = require ("../../../Constants");
const SoulSummonsBase = require("../setFRF/SoulSummons");

class SoulSummons extends SoulSummonsBase {
  constructor (game) {
    super(game, "Soul Summons", "Ugin's Fate", "UGIN");
  }
}

module.exports = SoulSummons;
