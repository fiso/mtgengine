"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BantSureblade extends UnimplementedCard {
  constructor(game) {
    super(game, "Bant Sureblade", "Alara Reborn", "ARB");
  }
}

module.exports = BantSureblade;
