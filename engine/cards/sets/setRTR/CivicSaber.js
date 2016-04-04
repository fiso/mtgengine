"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CivicSaber extends UnimplementedCard {
  constructor(game) {
    super(game, "Civic Saber", "Return to Ravnica", "RTR");
  }
}

module.exports = CivicSaber;
