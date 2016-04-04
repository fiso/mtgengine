"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MaliciousIntent extends Card {
  constructor(game) {
    super(game, "Malicious Intent", "Avacyn Restored", "AVR");
  }
}

module.exports = MaliciousIntent;
