"use strict";
const Constants = require ("../../../Constants");
const GolgariSignetBase = require("../setCM2/GolgariSignet");

class GolgariSignet extends GolgariSignetBase {
  constructor (game) {
    super(game, "Golgari Signet", "Commander 2011", "CMD");
  }
}

module.exports = GolgariSignet;
