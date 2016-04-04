"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HedronMatrix extends Card {
  constructor(game) {
    super(game, "Hedron Matrix", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = HedronMatrix;
