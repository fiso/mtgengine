"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TravelingPlague extends Card {
  constructor(game) {
    super(game, "Traveling Plague", "Odyssey", "ODY");
  }
}

module.exports = TravelingPlague;
