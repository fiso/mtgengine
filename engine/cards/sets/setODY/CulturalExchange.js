"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CulturalExchange extends Card {
  constructor(game) {
    super(game, "Cultural Exchange", "Odyssey", "ODY");
  }
}

module.exports = CulturalExchange;
