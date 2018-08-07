"use strict";
const Constants = require ("../../../Constants");
const GodsWillingBase = require("../setA25/GodsWilling");

class GodsWilling extends GodsWillingBase {
  constructor (game) {
    super(game, "Gods Willing", "Theros", "THS");
  }
}

module.exports = GodsWilling;
