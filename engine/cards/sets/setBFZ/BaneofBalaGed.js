"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BaneofBalaGed extends Card {
  constructor(game) {
    super(game, "Bane of Bala Ged", "Battle for Zendikar", "BFZ");
  }
}

module.exports = BaneofBalaGed;
