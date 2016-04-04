"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TouchofBrillianceBase = require("../setPOR/TouchofBrilliance.js");

class TouchofBrilliance extends TouchofBrillianceBase {
  constructor(game) {
    super(game, "Touch of Brilliance", "Starter 1999", "S99");
  }
}

module.exports = TouchofBrilliance;
