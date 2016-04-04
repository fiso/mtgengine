"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HedronCrab extends Card {
  constructor(game) {
    super(game, "Hedron Crab", "Zendikar", "ZEN");
  }
}

module.exports = HedronCrab;
