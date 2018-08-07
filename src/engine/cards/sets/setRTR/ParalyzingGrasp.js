"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ParalyzingGrasp extends UnimplementedCard {
  constructor (game) {
    super(game, "Paralyzing Grasp", "Return to Ravnica", "RTR");
  }
}

module.exports = ParalyzingGrasp;
