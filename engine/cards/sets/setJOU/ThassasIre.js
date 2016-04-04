"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThassasIre extends UnimplementedCard {
  constructor(game) {
    super(game, "Thassa's Ire", "Journey into Nyx", "JOU");
  }
}

module.exports = ThassasIre;
