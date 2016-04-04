"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NaarIsle extends Card {
  constructor(game) {
    super(game, "Naar Isle", "Planechase", "HOP");
  }
}

module.exports = NaarIsle;
