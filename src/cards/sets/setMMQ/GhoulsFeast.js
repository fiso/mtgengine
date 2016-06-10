"use strict";
const Constants = require ("../../../Constants");
const GhoulsFeastBase = require("../setDDJ/GhoulsFeast");

class GhoulsFeast extends GhoulsFeastBase {
  constructor (game) {
    super(game, "Ghoul's Feast", "Mercadian Masques", "MMQ");
  }
}

module.exports = GhoulsFeast;
