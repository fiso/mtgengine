"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UnwindingClock extends UnimplementedCard {
  constructor(game) {
    super(game, "Unwinding Clock", "New Phyrexia", "NPH");
  }
}

module.exports = UnwindingClock;
