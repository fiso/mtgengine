"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ProfoundJourney extends Card {
  constructor(game) {
    super(game, "Profound Journey", "Dragons of Tarkir", "DTK");
  }
}

module.exports = ProfoundJourney;
