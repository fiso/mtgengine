"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BreakofDay extends UnimplementedCard {
  constructor (game) {
    super(game, "Break of Day", "Dark Ascension", "DKA");
  }
}

module.exports = BreakofDay;
