"use strict";
const Constants = require ("../../../Constants");
const GolgariSignetBase = require("../setCM2/GolgariSignet");

class GolgariSignet extends GolgariSignetBase {
  constructor (game) {
    super(game, "Golgari Signet", "Commander Anthology", "CMA");
  }
}

module.exports = GolgariSignet;
