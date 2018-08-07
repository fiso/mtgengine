"use strict";
const Constants = require ("../../../Constants");
const GlassesofUrzaBase = require("../setME4/GlassesofUrza");

class GlassesofUrza extends GlassesofUrzaBase {
  constructor (game) {
    super(game, "Glasses of Urza", "Intl. Collectors’ Edition", "CEI");
  }
}

module.exports = GlassesofUrza;
