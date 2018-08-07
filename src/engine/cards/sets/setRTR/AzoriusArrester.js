"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AzoriusArrester extends UnimplementedCard {
  constructor (game) {
    super(game, "Azorius Arrester", "Return to Ravnica", "RTR");
  }
}

module.exports = AzoriusArrester;
