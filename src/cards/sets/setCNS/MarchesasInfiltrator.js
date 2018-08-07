"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MarchesasInfiltrator extends UnimplementedCard {
  constructor (game) {
    super(game, "Marchesa's Infiltrator", "Conspiracy", "CNS");
  }
}

module.exports = MarchesasInfiltrator;
