"use strict";
const Constants = require ("../../../Constants");
const TouchofBrillianceBase = require("../setPOR/TouchofBrilliance");

class TouchofBrilliance extends TouchofBrillianceBase {
  constructor (game) {
    super(game, "Touch of Brilliance", "Portal Second Age", "PO2");
  }
}

module.exports = TouchofBrilliance;
