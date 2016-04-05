"use strict";
const Constants = require ("../../../Constants");
const RenewingTouchBase = require("../setPO2/RenewingTouch");

class RenewingTouch extends RenewingTouchBase {
  constructor(game) {
    super(game, "Renewing Touch", "Starter 1999", "S99");
  }
}

module.exports = RenewingTouch;
