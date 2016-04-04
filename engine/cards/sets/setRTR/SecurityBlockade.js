"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SecurityBlockade extends UnimplementedCard {
  constructor(game) {
    super(game, "Security Blockade", "Return to Ravnica", "RTR");
  }
}

module.exports = SecurityBlockade;
