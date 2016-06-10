"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DreadSummons extends UnimplementedCard {
  constructor (game) {
    super(game, "Dread Summons", "Commander 2015", "C15");
  }
}

module.exports = DreadSummons;
