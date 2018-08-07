"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NagaOracle extends UnimplementedCard {
  constructor (game) {
    super(game, "Naga Oracle", "Amonkhet", "AKH");
  }
}

module.exports = NagaOracle;
