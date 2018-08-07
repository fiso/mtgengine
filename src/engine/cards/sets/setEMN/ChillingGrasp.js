"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChillingGrasp extends UnimplementedCard {
  constructor (game) {
    super(game, "Chilling Grasp", "Eldritch Moon", "EMN");
  }
}

module.exports = ChillingGrasp;
