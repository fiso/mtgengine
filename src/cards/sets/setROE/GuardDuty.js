"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GuardDuty extends UnimplementedCard {
  constructor (game) {
    super(game, "Guard Duty", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = GuardDuty;
