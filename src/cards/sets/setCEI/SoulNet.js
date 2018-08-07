"use strict";
const Constants = require ("../../../Constants");
const SoulNetBase = require("../set7ED/SoulNet");

class SoulNet extends SoulNetBase {
  constructor (game) {
    super(game, "Soul Net", "Intl. Collectors’ Edition", "CEI");
  }
}

module.exports = SoulNet;
