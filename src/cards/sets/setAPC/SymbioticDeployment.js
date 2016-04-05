"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SymbioticDeployment extends UnimplementedCard {
  constructor(game) {
    super(game, "Symbiotic Deployment", "Apocalypse", "APC");
  }
}

module.exports = SymbioticDeployment;
