"use strict";
const Constants = require ("../../../Constants");
const MageSlayerBase = require("../setARB/MageSlayer");

class MageSlayer extends MageSlayerBase {
  constructor(game) {
    super(game, "Mage Slayer", "Planechase", "HOP");
  }
}

module.exports = MageSlayer;
