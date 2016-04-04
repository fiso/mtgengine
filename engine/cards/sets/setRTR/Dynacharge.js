"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Dynacharge extends Card {
  constructor(game) {
    super(game, "Dynacharge", "Return to Ravnica", "RTR");
  }
}

module.exports = Dynacharge;
