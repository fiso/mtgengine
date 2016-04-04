"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GrimRoustabout extends Card {
  constructor(game) {
    super(game, "Grim Roustabout", "Return to Ravnica", "RTR");
  }
}

module.exports = GrimRoustabout;
