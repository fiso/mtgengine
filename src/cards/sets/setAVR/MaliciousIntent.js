"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MaliciousIntent extends UnimplementedCard {
  constructor(game) {
    super(game, "Malicious Intent", "Avacyn Restored", "AVR");
  }
}

module.exports = MaliciousIntent;
