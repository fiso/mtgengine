"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DereviEmpyrialTactician extends UnimplementedCard {
  constructor (game) {
    super(game, "Derevi, Empyrial Tactician", "Commander Anthology", "CMA");
  }
}

module.exports = DereviEmpyrialTactician;
