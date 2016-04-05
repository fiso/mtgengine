"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EchoingTruth extends UnimplementedCard {
  constructor(game) {
    super(game, "Echoing Truth", "Commander 2015", "C15");
  }
}

module.exports = EchoingTruth;
