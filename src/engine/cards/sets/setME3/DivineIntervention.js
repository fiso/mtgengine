"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DivineIntervention extends UnimplementedCard {
  constructor (game) {
    super(game, "Divine Intervention", "Masters Edition III", "ME3");
  }
}

module.exports = DivineIntervention;
