"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Lifeline extends UnimplementedCard {
  constructor(game) {
    super(game, "Lifeline", "Urza's Saga", "USG");
  }
}

module.exports = Lifeline;
