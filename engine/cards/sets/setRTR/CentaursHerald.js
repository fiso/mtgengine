"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CentaursHerald extends Card {
  constructor(game) {
    super(game, "Centaur's Herald", "Return to Ravnica", "RTR");
  }
}

module.exports = CentaursHerald;
