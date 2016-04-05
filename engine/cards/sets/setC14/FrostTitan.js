"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FrostTitan extends UnimplementedCard {
  constructor(game) {
    super(game, "Frost Titan", "Commander 2014", "C14");
  }
}

module.exports = FrostTitan;
