"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RabidElephant extends Card {
  constructor(game) {
    super(game, "Rabid Elephant", "Odyssey", "ODY");
  }
}

module.exports = RabidElephant;
