"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Shiv extends Card {
  constructor(game) {
    super(game, "Shiv", "Planechase", "HOP");
  }
}

module.exports = Shiv;
