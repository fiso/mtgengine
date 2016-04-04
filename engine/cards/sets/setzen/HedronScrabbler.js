"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HedronScrabbler extends Card {
  constructor(game) {
    super(game, "Hedron Scrabbler", "Zendikar", "ZEN");
  }
}

module.exports = HedronScrabbler;
