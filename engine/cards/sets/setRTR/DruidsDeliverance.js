"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DruidsDeliverance extends UnimplementedCard {
  constructor(game) {
    super(game, "Druid's Deliverance", "Return to Ravnica", "RTR");
  }
}

module.exports = DruidsDeliverance;
