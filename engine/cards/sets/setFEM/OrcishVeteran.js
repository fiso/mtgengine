"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class OrcishVeteran extends Card {
  constructor(game) {
    super(game, "Orcish Veteran", "Fallen Empires", "FEM");
  }
}

module.exports = OrcishVeteran;
