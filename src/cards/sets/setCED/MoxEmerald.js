"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MoxEmerald extends UnimplementedCard {
  constructor (game) {
    super(game, "Mox Emerald", "Collector's Edition", "CED");
  }
}

module.exports = MoxEmerald;
