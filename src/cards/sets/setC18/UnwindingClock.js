"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UnwindingClock extends UnimplementedCard {
  constructor (game) {
    super(game, "Unwinding Clock", "Commander 2018", "C18");
  }
}

module.exports = UnwindingClock;
