"use strict";
const Constants = require ("../../../Constants");
const GlassesofUrzaBase = require("../set6ED/GlassesofUrza");

class GlassesofUrza extends GlassesofUrzaBase {
  constructor (game) {
    super(game, "Glasses of Urza", "Collector's Edition", "CED");
  }
}

module.exports = GlassesofUrza;
