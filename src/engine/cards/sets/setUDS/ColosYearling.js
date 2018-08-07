"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ColosYearling extends UnimplementedCard {
  constructor (game) {
    super(game, "Colos Yearling", "Urza's Destiny", "UDS");
  }
}

module.exports = ColosYearling;
