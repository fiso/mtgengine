"use strict";
const Constants = require ("../../../Constants");
const MoxEmeraldBase = require("../setCED/MoxEmerald");

class MoxEmerald extends MoxEmeraldBase {
  constructor (game) {
    super(game, "Mox Emerald", "Limited Edition Alpha", "LEA");
  }
}

module.exports = MoxEmerald;
