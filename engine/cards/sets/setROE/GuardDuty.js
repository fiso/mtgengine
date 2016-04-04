"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GuardDuty extends Card {
  constructor(game) {
    super(game, "Guard Duty", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = GuardDuty;
