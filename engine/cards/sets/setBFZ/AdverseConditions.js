"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AdverseConditions extends UnimplementedCard {
  constructor(game) {
    super(game, "Adverse Conditions", "Battle for Zendikar", "BFZ");
  }
}

module.exports = AdverseConditions;
