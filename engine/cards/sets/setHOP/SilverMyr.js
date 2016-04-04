"use strict";
const Constants = require ("../../../Constants");
const SilverMyrBase = require("../setDDF/SilverMyr");

class SilverMyr extends SilverMyrBase {
  constructor(game) {
    super(game, "Silver Myr", "Planechase", "HOP");
  }
}

module.exports = SilverMyr;
