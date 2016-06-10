"use strict";
const Constants = require ("../../../Constants");
const TotemGuideHartebeestBase = require("../setORI/TotemGuideHartebeest");

class TotemGuideHartebeest extends TotemGuideHartebeestBase {
  constructor (game) {
    super(game, "Totem-Guide Hartebeest", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = TotemGuideHartebeest;
