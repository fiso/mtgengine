"use strict";
const Constants = require ("../../../Constants");
const DragonscaleBoonBase = require("../setUGIN/DragonscaleBoon");

class DragonscaleBoon extends DragonscaleBoonBase {
  constructor (game) {
    super(game, "Dragonscale Boon", "Khans of Tarkir", "KTK");
  }
}

module.exports = DragonscaleBoon;
