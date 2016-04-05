"use strict";
const Constants = require ("../../../Constants");
const SoulNetBase = require("../set6ED/SoulNet");

class SoulNet extends SoulNetBase {
  constructor(game) {
    super(game, "Soul Net", "International Collector's Edition", "CEI");
  }
}

module.exports = SoulNet;
