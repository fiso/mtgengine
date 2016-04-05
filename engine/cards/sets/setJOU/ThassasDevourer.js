"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThassasDevourer extends UnimplementedCard {
  constructor(game) {
    super(game, "Thassa's Devourer", "Journey into Nyx", "JOU");
  }
}

module.exports = ThassasDevourer;
