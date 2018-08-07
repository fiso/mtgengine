"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SoulExchange extends UnimplementedCard {
  constructor (game) {
    super(game, "Soul Exchange", "Masters Edition II", "ME2");
  }
}

module.exports = SoulExchange;
