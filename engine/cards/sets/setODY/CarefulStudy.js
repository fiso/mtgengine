"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CarefulStudy extends Card {
  constructor(game) {
    super(game, "Careful Study", "Odyssey", "ODY");
  }
}

module.exports = CarefulStudy;
