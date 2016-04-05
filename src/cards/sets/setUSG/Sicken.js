"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Sicken extends UnimplementedCard {
  constructor(game) {
    super(game, "Sicken", "Urza's Saga", "USG");
  }
}

module.exports = Sicken;
