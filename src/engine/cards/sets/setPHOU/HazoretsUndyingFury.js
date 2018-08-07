"use strict";
const Constants = require ("../../../Constants");
const HazoretsUndyingFuryBase = require("../setHOU/HazoretsUndyingFury");

class HazoretsUndyingFury extends HazoretsUndyingFuryBase {
  constructor (game) {
    super(game, "Hazoret's Undying Fury", "Hour of Devastation Promos", "PHOU");
  }
}

module.exports = HazoretsUndyingFury;
