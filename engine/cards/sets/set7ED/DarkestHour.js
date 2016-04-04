"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DarkestHour extends UnimplementedCard {
  constructor(game) {
    super(game, "Darkest Hour", "Seventh Edition", "7ED");
  }
}

module.exports = DarkestHour;
