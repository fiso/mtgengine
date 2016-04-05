"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpinyStarfish extends UnimplementedCard {
  constructor(game) {
    super(game, "Spiny Starfish", "Alliances", "ALL");
  }
}

module.exports = SpinyStarfish;
