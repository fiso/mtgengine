"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Blisterpod extends Card {
  constructor(game) {
    super(game, "Blisterpod", "Battle for Zendikar", "BFZ");
  }
}

module.exports = Blisterpod;
