"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MoxEmeraldBase = require("../setCED/MoxEmerald.js");

class MoxEmerald extends MoxEmeraldBase {
  constructor(game) {
    super(game, "Mox Emerald", "Unlimited Edition", "2ED");
  }
}

module.exports = MoxEmerald;
