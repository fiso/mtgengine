"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Downsize extends Card {
  constructor(game) {
    super(game, "Downsize", "Return to Ravnica", "RTR");
  }
}

module.exports = Downsize;
