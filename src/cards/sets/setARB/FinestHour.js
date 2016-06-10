"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FinestHour extends UnimplementedCard {
  constructor (game) {
    super(game, "Finest Hour", "Alara Reborn", "ARB");
  }
}

module.exports = FinestHour;
