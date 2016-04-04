"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FiveAlarmFire extends Card {
  constructor(game) {
    super(game, "Five-Alarm Fire", "Gatecrash", "GTC");
  }
}

module.exports = FiveAlarmFire;
