"use strict";
const Constants = require ("../../../Constants");
const MoxEmeraldBase = require("../setVMA/MoxEmerald");

class MoxEmerald extends MoxEmeraldBase {
  constructor (game) {
    super(game, "Mox Emerald", "Limited Edition Beta", "LEB");
  }
}

module.exports = MoxEmerald;
