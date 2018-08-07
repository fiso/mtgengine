"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SettletheScore extends UnimplementedCard {
  constructor (game) {
    super(game, "Settle the Score", "Dominaria", "DOM");
  }
}

module.exports = SettletheScore;
