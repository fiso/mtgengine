"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MarshGas extends Card {
  constructor(game) {
    super(game, "Marsh Gas", "Fourth Edition", "4ED");
  }
}

module.exports = MarshGas;
