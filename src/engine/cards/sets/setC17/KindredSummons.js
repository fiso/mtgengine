"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KindredSummons extends UnimplementedCard {
  constructor (game) {
    super(game, "Kindred Summons", "Commander 2017", "C17");
  }
}

module.exports = KindredSummons;
