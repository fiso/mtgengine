"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Rejuvenate extends UnimplementedCard {
  constructor(game) {
    super(game, "Rejuvenate", "Urza's Saga", "USG");
  }
}

module.exports = Rejuvenate;
