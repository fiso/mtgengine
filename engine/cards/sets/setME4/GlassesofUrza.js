"use strict";
const Constants = require ("../../../Constants");
const GlassesofUrzaBase = require("../set6ED/GlassesofUrza");

class GlassesofUrza extends GlassesofUrzaBase {
  constructor(game) {
    super(game, "Glasses of Urza", "Masters Edition IV", "ME4");
  }
}

module.exports = GlassesofUrza;
