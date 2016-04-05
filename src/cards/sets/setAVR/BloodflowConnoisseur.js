"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BloodflowConnoisseur extends UnimplementedCard {
  constructor(game) {
    super(game, "Bloodflow Connoisseur", "Avacyn Restored", "AVR");
  }
}

module.exports = BloodflowConnoisseur;
