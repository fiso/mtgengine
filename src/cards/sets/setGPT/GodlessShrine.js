"use strict";
const Constants = require ("../../../Constants");
const GodlessShrineBase = require("../setEXP/GodlessShrine");

class GodlessShrine extends GodlessShrineBase {
  constructor (game) {
    super(game, "Godless Shrine", "Guildpact", "GPT");
  }
}

module.exports = GodlessShrine;
