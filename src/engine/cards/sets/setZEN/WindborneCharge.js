"use strict";
const Constants = require ("../../../Constants");
const WindborneChargeBase = require("../setCN2/WindborneCharge");

class WindborneCharge extends WindborneChargeBase {
  constructor (game) {
    super(game, "Windborne Charge", "Zendikar", "ZEN");
  }
}

module.exports = WindborneCharge;
