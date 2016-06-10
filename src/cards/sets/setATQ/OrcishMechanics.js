"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OrcishMechanics extends UnimplementedCard {
  constructor (game) {
    super(game, "Orcish Mechanics", "Antiquities", "ATQ");
  }
}

module.exports = OrcishMechanics;
