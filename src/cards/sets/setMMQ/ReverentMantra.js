"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ReverentMantra extends UnimplementedCard {
  constructor(game) {
    super(game, "Reverent Mantra", "Mercadian Masques", "MMQ");
  }
}

module.exports = ReverentMantra;
