"use strict";
const Constants = require ("../../../Constants");
const GodlessShrineBase = require("../setEXP/GodlessShrine");

class GodlessShrine extends GodlessShrineBase {
  constructor (game) {
    super(game, "Godless Shrine", "Gatecrash", "GTC");
  }
}

module.exports = GodlessShrine;
