"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Naya extends Card {
  constructor(game) {
    super(game, "Naya", "Planechase", "HOP");
  }
}

module.exports = Naya;
