"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DivineIntervention extends UnimplementedCard {
  constructor(game) {
    super(game, "Divine Intervention", "Legends", "LEG");
  }
}

module.exports = DivineIntervention;
