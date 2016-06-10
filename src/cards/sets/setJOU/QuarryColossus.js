"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class QuarryColossus extends UnimplementedCard {
  constructor (game) {
    super(game, "Quarry Colossus", "Journey into Nyx", "JOU");
  }
}

module.exports = QuarryColossus;
