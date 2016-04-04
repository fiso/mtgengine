"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BayFalcon extends Card {
  constructor(game) {
    super(game, "Bay Falcon", "Mirage", "MIR");
  }
}

module.exports = BayFalcon;
