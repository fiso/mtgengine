"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HedronBlade extends Card {
  constructor(game) {
    super(game, "Hedron Blade", "Battle for Zendikar", "BFZ");
  }
}

module.exports = HedronBlade;
