"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Retaliation extends UnimplementedCard {
  constructor(game) {
    super(game, "Retaliation", "Urza's Saga", "USG");
  }
}

module.exports = Retaliation;
