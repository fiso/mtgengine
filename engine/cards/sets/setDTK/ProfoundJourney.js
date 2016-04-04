"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ProfoundJourney extends UnimplementedCard {
  constructor(game) {
    super(game, "Profound Journey", "Dragons of Tarkir", "DTK");
  }
}

module.exports = ProfoundJourney;
