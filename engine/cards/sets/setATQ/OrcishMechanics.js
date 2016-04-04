"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class OrcishMechanics extends Card {
  constructor(game) {
    super(game, "Orcish Mechanics", "Antiquities", "ATQ");
  }
}

module.exports = OrcishMechanics;
