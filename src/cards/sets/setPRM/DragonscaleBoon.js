"use strict";
const Constants = require ("../../../Constants");
const DragonscaleBoonBase = require("../setUGIN/DragonscaleBoon");

class DragonscaleBoon extends DragonscaleBoonBase {
  constructor (game) {
    super(game, "Dragonscale Boon", "Magic Online Promos", "PRM");
  }
}

module.exports = DragonscaleBoon;
