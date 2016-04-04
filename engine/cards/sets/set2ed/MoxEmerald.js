"use strict";
const Constants = require ("../../../Constants");
const MoxEmeraldBase = require("../setCED/MoxEmerald");

class MoxEmerald extends MoxEmeraldBase {
  constructor(game) {
    super(game, "Mox Emerald", "Unlimited Edition", "2ED");
  }
}

module.exports = MoxEmerald;
