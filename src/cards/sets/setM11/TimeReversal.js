"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TimeReversal extends UnimplementedCard {
  constructor(game) {
    super(game, "Time Reversal", "Magic 2011", "M11");
  }
}

module.exports = TimeReversal;
