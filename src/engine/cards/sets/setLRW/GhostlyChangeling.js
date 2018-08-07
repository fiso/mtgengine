"use strict";
const Constants = require ("../../../Constants");
const GhostlyChangelingBase = require("../setMM2/GhostlyChangeling");

class GhostlyChangeling extends GhostlyChangelingBase {
  constructor (game) {
    super(game, "Ghostly Changeling", "Lorwyn", "LRW");
  }
}

module.exports = GhostlyChangeling;
