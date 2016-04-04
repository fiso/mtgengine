"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DeviantGlee extends Card {
  constructor(game) {
    super(game, "Deviant Glee", "Return to Ravnica", "RTR");
  }
}

module.exports = DeviantGlee;
