"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SecretPlans extends Card {
  constructor(game) {
    super(game, "Secret Plans", "Khans of Tarkir", "KTK");
  }
}

module.exports = SecretPlans;
