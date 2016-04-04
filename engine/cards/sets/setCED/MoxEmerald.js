"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MoxEmerald extends Card {
  constructor(game) {
    super(game, "Mox Emerald", "Collector's Edition", "CED");
  }
}

module.exports = MoxEmerald;
