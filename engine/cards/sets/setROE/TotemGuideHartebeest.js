"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TotemGuideHartebeestBase = require("../setORI/TotemGuideHartebeest.js");

class TotemGuideHartebeest extends TotemGuideHartebeestBase {
  constructor(game) {
    super(game, "Totem-Guide Hartebeest", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = TotemGuideHartebeest;
