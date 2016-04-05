"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GraveBetrayal extends UnimplementedCard {
  constructor(game) {
    super(game, "Grave Betrayal", "Return to Ravnica", "RTR");
  }
}

module.exports = GraveBetrayal;
