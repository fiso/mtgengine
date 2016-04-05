"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UrbanBurgeoning extends UnimplementedCard {
  constructor(game) {
    super(game, "Urban Burgeoning", "Return to Ravnica", "RTR");
  }
}

module.exports = UrbanBurgeoning;
