"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HoverguardSweepersBase = require("../setC14/HoverguardSweepers.js");

class HoverguardSweepers extends HoverguardSweepersBase {
  constructor(game) {
    super(game, "Hoverguard Sweepers", "Fifth Dawn", "5DN");
  }
}

module.exports = HoverguardSweepers;
