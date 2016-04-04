"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DruidsCall extends Card {
  constructor(game) {
    super(game, "Druid's Call", "Odyssey", "ODY");
  }
}

module.exports = DruidsCall;
