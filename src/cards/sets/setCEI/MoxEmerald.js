"use strict";
const Constants = require ("../../../Constants");
const MoxEmeraldBase = require("../setVMA/MoxEmerald");

class MoxEmerald extends MoxEmeraldBase {
  constructor (game) {
    super(game, "Mox Emerald", "Intl. Collectors’ Edition", "CEI");
  }
}

module.exports = MoxEmerald;
