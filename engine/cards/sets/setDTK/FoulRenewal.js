"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FoulRenewal extends Card {
  constructor(game) {
    super(game, "Foul Renewal", "Dragons of Tarkir", "DTK");
  }
}

module.exports = FoulRenewal;
