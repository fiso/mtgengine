"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SoulSummonsBase = require("../setFRF/SoulSummons.js");

class SoulSummons extends SoulSummonsBase {
  constructor(game) {
    super(game, "Soul Summons", "Ugin's Fate promos", "FRF_UGIN");
  }
}

module.exports = SoulSummons;
