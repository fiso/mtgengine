"use strict";
const Constants = require ("../../../Constants");
const MoxEmeraldBase = require("../setCED/MoxEmerald");

class MoxEmerald extends MoxEmeraldBase {
  constructor (game) {
    super(game, "Mox Emerald", "Vintage Masters", "VMA");
  }
}

module.exports = MoxEmerald;
