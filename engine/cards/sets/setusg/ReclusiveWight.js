"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ReclusiveWight extends UnimplementedCard {
  constructor(game) {
    super(game, "Reclusive Wight", "Urza's Saga", "USG");
  }
}

module.exports = ReclusiveWight;
