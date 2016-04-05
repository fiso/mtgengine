"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TrustedForcemage extends UnimplementedCard {
  constructor(game) {
    super(game, "Trusted Forcemage", "Avacyn Restored", "AVR");
  }
}

module.exports = TrustedForcemage;
