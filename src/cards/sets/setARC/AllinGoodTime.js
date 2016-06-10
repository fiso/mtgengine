"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AllinGoodTime extends UnimplementedCard {
  constructor (game) {
    super(game, "All in Good Time", "Archenemy", "ARC");
  }
}

module.exports = AllinGoodTime;
