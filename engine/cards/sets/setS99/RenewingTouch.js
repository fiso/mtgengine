"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RenewingTouchBase = require("../setPO2/RenewingTouch.js");

class RenewingTouch extends RenewingTouchBase {
  constructor(game) {
    super(game, "Renewing Touch", "Starter 1999", "S99");
  }
}

module.exports = RenewingTouch;
