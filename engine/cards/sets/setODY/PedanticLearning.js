"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PedanticLearning extends Card {
  constructor(game) {
    super(game, "Pedantic Learning", "Odyssey", "ODY");
  }
}

module.exports = PedanticLearning;
