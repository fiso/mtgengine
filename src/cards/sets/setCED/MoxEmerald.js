"use strict";
const Constants = require ("../../../Constants");
const MoxEmeraldBase = require("../setVMA/MoxEmerald");

class MoxEmerald extends MoxEmeraldBase {
  constructor (game) {
    super(game, "Mox Emerald", "Collectors’ Edition", "CED");
  }
}

module.exports = MoxEmerald;
