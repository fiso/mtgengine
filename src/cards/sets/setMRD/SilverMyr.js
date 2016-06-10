"use strict";
const Constants = require ("../../../Constants");
const SilverMyrBase = require("../setDDF/SilverMyr");

class SilverMyr extends SilverMyrBase {
  constructor (game) {
    super(game, "Silver Myr", "Mirrodin", "MRD");
  }
}

module.exports = SilverMyr;
