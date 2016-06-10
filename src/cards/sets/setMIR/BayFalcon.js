"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BayFalcon extends UnimplementedCard {
  constructor (game) {
    super(game, "Bay Falcon", "Mirage", "MIR");
  }
}

module.exports = BayFalcon;
