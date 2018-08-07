"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FaultLine extends UnimplementedCard {
  constructor (game) {
    super(game, "Fault Line", "Urza's Saga", "USG");
  }
}

module.exports = FaultLine;
