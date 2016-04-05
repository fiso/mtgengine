"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GreatWhale extends UnimplementedCard {
  constructor(game) {
    super(game, "Great Whale", "Urza's Saga", "USG");
  }
}

module.exports = GreatWhale;
