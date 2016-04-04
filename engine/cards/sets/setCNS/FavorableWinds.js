"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FavorableWindsBase = require("../setAVR/FavorableWinds.js");

class FavorableWinds extends FavorableWindsBase {
  constructor(game) {
    super(game, "Favorable Winds", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = FavorableWinds;
