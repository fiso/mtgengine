"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HornetQueen extends UnimplementedCard {
  constructor (game) {
    super(game, "Hornet Queen", "Magic 2015", "M15");
  }
}

module.exports = HornetQueen;
