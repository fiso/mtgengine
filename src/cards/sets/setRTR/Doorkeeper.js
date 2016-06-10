"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Doorkeeper extends UnimplementedCard {
  constructor (game) {
    super(game, "Doorkeeper", "Return to Ravnica", "RTR");
  }
}

module.exports = Doorkeeper;
