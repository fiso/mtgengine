"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FiveAlarmFire extends UnimplementedCard {
  constructor (game) {
    super(game, "Five-Alarm Fire", "Gatecrash", "GTC");
  }
}

module.exports = FiveAlarmFire;
