"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Teleportal extends UnimplementedCard {
  constructor (game) {
    super(game, "Teleportal", "Return to Ravnica", "RTR");
  }
}

module.exports = Teleportal;
