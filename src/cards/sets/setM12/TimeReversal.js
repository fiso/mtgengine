"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TimeReversal extends UnimplementedCard {
  constructor (game) {
    super(game, "Time Reversal", "Magic 2012", "M12");
  }
}

module.exports = TimeReversal;
