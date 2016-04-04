"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TravelingPlague extends UnimplementedCard {
  constructor(game) {
    super(game, "Traveling Plague", "Odyssey", "ODY");
  }
}

module.exports = TravelingPlague;
