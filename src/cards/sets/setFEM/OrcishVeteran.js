"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OrcishVeteran extends UnimplementedCard {
  constructor (game) {
    super(game, "Orcish Veteran", "Fallen Empires", "FEM");
  }
}

module.exports = OrcishVeteran;
