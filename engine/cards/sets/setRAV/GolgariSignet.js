"use strict";
const Constants = require ("../../../Constants");
const GolgariSignetBase = require("../setC15/GolgariSignet");

class GolgariSignet extends GolgariSignetBase {
  constructor(game) {
    super(game, "Golgari Signet", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = GolgariSignet;
