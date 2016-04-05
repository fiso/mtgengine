"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DestroytheEvidence extends UnimplementedCard {
  constructor(game) {
    super(game, "Destroy the Evidence", "Return to Ravnica", "RTR");
  }
}

module.exports = DestroytheEvidence;
