"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ArashinCleric extends UnimplementedCard {
  constructor (game) {
    super(game, "Arashin Cleric", "Fate Reforged", "FRF");
  }
}

module.exports = ArashinCleric;
