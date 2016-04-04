"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ElorenWilds extends Card {
  constructor(game) {
    super(game, "Eloren Wilds", "Planechase", "HOP");
  }
}

module.exports = ElorenWilds;
