"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UnworthyDead extends UnimplementedCard {
  constructor(game) {
    super(game, "Unworthy Dead", "Urza's Saga", "USG");
  }
}

module.exports = UnworthyDead;
