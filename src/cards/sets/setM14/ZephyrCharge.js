"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ZephyrCharge extends UnimplementedCard {
  constructor (game) {
    super(game, "Zephyr Charge", "Magic 2014 Core Set", "M14");
  }
}

module.exports = ZephyrCharge;
