"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CarapaceForger extends Card {
  constructor(game) {
    super(game, "Carapace Forger", "Scars of Mirrodin", "SOM");
  }
}

module.exports = CarapaceForger;
