"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SigiledStarfish extends UnimplementedCard {
  constructor(game) {
    super(game, "Sigiled Starfish", "Journey into Nyx", "JOU");
  }
}

module.exports = SigiledStarfish;
