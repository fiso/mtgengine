"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChillHaunting extends UnimplementedCard {
  constructor(game) {
    super(game, "Chill Haunting", "Scourge", "SCG");
  }
}

module.exports = ChillHaunting;
