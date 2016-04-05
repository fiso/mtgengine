"use strict";
const Constants = require ("../../../Constants");
const GolgariSignetBase = require("../setC15/GolgariSignet");

class GolgariSignet extends GolgariSignetBase {
  constructor(game) {
    super(game, "Golgari Signet", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = GolgariSignet;
