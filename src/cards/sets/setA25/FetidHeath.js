"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FetidHeath extends UnimplementedCard {
  constructor (game) {
    super(game, "Fetid Heath", "Masters 25", "A25");
  }
}

module.exports = FetidHeath;
