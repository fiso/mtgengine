"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Llanowar extends Card {
  constructor(game) {
    super(game, "Llanowar", "Planechase", "HOP");
  }
}

module.exports = Llanowar;
