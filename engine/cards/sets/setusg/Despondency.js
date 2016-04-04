"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Despondency extends UnimplementedCard {
  constructor(game) {
    super(game, "Despondency", "Urza's Saga", "USG");
  }
}

module.exports = Despondency;
