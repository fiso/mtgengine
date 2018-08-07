"use strict";
const Constants = require ("../../../Constants");
const GuardDutyBase = require("../setIMA/GuardDuty");

class GuardDuty extends GuardDutyBase {
  constructor (game) {
    super(game, "Guard Duty", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = GuardDuty;
