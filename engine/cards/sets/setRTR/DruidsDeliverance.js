"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DruidsDeliverance extends Card {
  constructor(game) {
    super(game, "Druid's Deliverance", "Return to Ravnica", "RTR");
  }
}

module.exports = DruidsDeliverance;
