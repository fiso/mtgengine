"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MarduScout extends UnimplementedCard {
  constructor (game) {
    super(game, "Mardu Scout", "Fate Reforged", "FRF");
  }
}

module.exports = MarduScout;
