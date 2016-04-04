"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SandstormCharger extends Card {
  constructor(game) {
    super(game, "Sandstorm Charger", "Dragons of Tarkir", "DTK");
  }
}

module.exports = SandstormCharger;
