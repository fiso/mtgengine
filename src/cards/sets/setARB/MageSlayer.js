"use strict";
const Constants = require ("../../../Constants");
const MageSlayerBase = require("../setHOP/MageSlayer");

class MageSlayer extends MageSlayerBase {
  constructor (game) {
    super(game, "Mage Slayer", "Alara Reborn", "ARB");
  }
}

module.exports = MageSlayer;
