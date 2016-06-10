"use strict";
const Constants = require ("../../../Constants");
const ManaFlareBase = require("../setCED/ManaFlare");

class ManaFlare extends ManaFlareBase {
  constructor (game) {
    super(game, "Mana Flare", "International Collector's Edition", "CEI");
  }
}

module.exports = ManaFlare;
