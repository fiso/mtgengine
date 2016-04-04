"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ElgaudShieldmate extends UnimplementedCard {
  constructor(game) {
    super(game, "Elgaud Shieldmate", "Avacyn Restored", "AVR");
  }
}

module.exports = ElgaudShieldmate;
