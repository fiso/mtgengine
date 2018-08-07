"use strict";
const Constants = require ("../../../Constants");
const MoxEmeraldBase = require("../setVMA/MoxEmerald");

class MoxEmerald extends MoxEmeraldBase {
  constructor (game) {
    super(game, "Mox Emerald", "Magic Online Promos", "PRM");
  }
}

module.exports = MoxEmerald;
