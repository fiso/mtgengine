"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MoxEmerald extends UnimplementedCard {
  constructor (game) {
    super(game, "Mox Emerald", "Vintage Masters", "VMA");
  }
}

module.exports = MoxEmerald;
