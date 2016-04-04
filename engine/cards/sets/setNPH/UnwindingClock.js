"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class UnwindingClock extends Card {
  constructor(game) {
    super(game, "Unwinding Clock", "New Phyrexia", "NPH");
  }
}

module.exports = UnwindingClock;
