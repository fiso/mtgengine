"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SecurityBlockade extends Card {
  constructor(game) {
    super(game, "Security Blockade", "Return to Ravnica", "RTR");
  }
}

module.exports = SecurityBlockade;
