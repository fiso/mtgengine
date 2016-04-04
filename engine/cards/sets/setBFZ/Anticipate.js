"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Anticipate extends Card {
  constructor(game) {
    super(game, "Anticipate", "Battle for Zendikar", "BFZ");
  }
}

module.exports = Anticipate;
