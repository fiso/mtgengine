"use strict";
const Constants = require ("../../../Constants");
const LowlandBasiliskBase = require("../setTPR/LowlandBasilisk");

class LowlandBasilisk extends LowlandBasiliskBase {
  constructor (game) {
    super(game, "Lowland Basilisk", "Stronghold", "STH");
  }
}

module.exports = LowlandBasilisk;
