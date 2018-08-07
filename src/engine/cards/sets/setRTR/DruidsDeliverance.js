"use strict";
const Constants = require ("../../../Constants");
const DruidsDeliveranceBase = require("../setMM3/DruidsDeliverance");

class DruidsDeliverance extends DruidsDeliveranceBase {
  constructor (game) {
    super(game, "Druid's Deliverance", "Return to Ravnica", "RTR");
  }
}

module.exports = DruidsDeliverance;
