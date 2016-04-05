"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Dreadbore extends UnimplementedCard {
  constructor(game) {
    super(game, "Dreadbore", "Return to Ravnica", "RTR");
  }
}

module.exports = Dreadbore;
