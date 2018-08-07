"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OrcishMechanics extends UnimplementedCard {
  constructor (game) {
    super(game, "Orcish Mechanics", "Masters Edition IV", "ME4");
  }
}

module.exports = OrcishMechanics;
