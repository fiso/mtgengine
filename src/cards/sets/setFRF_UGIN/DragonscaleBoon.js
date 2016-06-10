"use strict";
const Constants = require ("../../../Constants");
const DragonscaleBoonBase = require("../setKTK/DragonscaleBoon");

class DragonscaleBoon extends DragonscaleBoonBase {
  constructor (game) {
    super(game, "Dragonscale Boon", "Ugin's Fate promos", "FRF_UGIN");
  }
}

module.exports = DragonscaleBoon;
