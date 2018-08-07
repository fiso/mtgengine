"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CentaursHerald extends UnimplementedCard {
  constructor (game) {
    super(game, "Centaur's Herald", "Return to Ravnica", "RTR");
  }
}

module.exports = CentaursHerald;
