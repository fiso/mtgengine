"use strict";
const Constants = require ("../../../Constants");
const GrimMonolithBase = require("../setPRM/GrimMonolith");

class GrimMonolith extends GrimMonolithBase {
  constructor (game) {
    super(game, "Grim Monolith", "Urza's Legacy", "ULG");
  }
}

module.exports = GrimMonolith;
