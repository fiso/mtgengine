"use strict";
const Constants = require ("../../../Constants");
const FavorableWindsBase = require("../setAVR/FavorableWinds");

class FavorableWinds extends FavorableWindsBase {
  constructor (game) {
    super(game, "Favorable Winds", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = FavorableWinds;
