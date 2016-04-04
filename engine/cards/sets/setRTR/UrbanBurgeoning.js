"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class UrbanBurgeoning extends Card {
  constructor(game) {
    super(game, "Urban Burgeoning", "Return to Ravnica", "RTR");
  }
}

module.exports = UrbanBurgeoning;
