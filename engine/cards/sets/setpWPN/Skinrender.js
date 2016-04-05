"use strict";
const Constants = require ("../../../Constants");
const SkinrenderBase = require("../setSOM/Skinrender");

class Skinrender extends SkinrenderBase {
  constructor(game) {
    super(game, "Skinrender", "WPN and Gateway", "pWPN");
  }
}

module.exports = Skinrender;
