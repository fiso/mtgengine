"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GlassesofUrzaBase = require("../set6ED/GlassesofUrza.js");

class GlassesofUrza extends GlassesofUrzaBase {
  constructor(game) {
    super(game, "Glasses of Urza", "Rivals Quick Start Set", "RQS");
  }
}

module.exports = GlassesofUrza;
