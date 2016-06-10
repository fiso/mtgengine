"use strict";
const Constants = require ("../../../Constants");
const GlassesofUrzaBase = require("../set6ED/GlassesofUrza");

class GlassesofUrza extends GlassesofUrzaBase {
  constructor (game) {
    super(game, "Glasses of Urza", "Limited Edition Beta", "LEB");
  }
}

module.exports = GlassesofUrza;
