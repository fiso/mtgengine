"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Contamination extends UnimplementedCard {
  constructor(game) {
    super(game, "Contamination", "Urza's Saga", "USG");
  }
}

module.exports = Contamination;
