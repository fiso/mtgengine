"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DispersalTechnician extends UnimplementedCard {
  constructor (game) {
    super(game, "Dispersal Technician", "Aether Revolt", "AER");
  }
}

module.exports = DispersalTechnician;
