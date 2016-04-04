"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Chlorophant extends Card {
  constructor(game) {
    super(game, "Chlorophant", "Odyssey", "ODY");
  }
}

module.exports = Chlorophant;
