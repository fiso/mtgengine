"use strict";
const Constants = require ("../../../Constants");
const SmokebraiderBase = require("../setLRW/Smokebraider");

class Smokebraider extends SmokebraiderBase {
  constructor (game) {
    super(game, "Smokebraider", "Planechase", "HOP");
  }
}

module.exports = Smokebraider;
