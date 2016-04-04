"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EnduringVictory extends UnimplementedCard {
  constructor(game) {
    super(game, "Enduring Victory", "Dragons of Tarkir", "DTK");
  }
}

module.exports = EnduringVictory;
