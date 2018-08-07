"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FungalInfection extends UnimplementedCard {
  constructor (game) {
    super(game, "Fungal Infection", "Dominaria", "DOM");
  }
}

module.exports = FungalInfection;
