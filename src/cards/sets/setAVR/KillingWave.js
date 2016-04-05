"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KillingWave extends UnimplementedCard {
  constructor(game) {
    super(game, "Killing Wave", "Avacyn Restored", "AVR");
  }
}

module.exports = KillingWave;
