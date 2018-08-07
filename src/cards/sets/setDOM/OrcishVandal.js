"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OrcishVandal extends UnimplementedCard {
  constructor (game) {
    super(game, "Orcish Vandal", "Dominaria", "DOM");
  }
}

module.exports = OrcishVandal;
