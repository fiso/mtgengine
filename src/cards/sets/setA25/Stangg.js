"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Stangg extends UnimplementedCard {
  constructor (game) {
    super(game, "Stangg", "Masters 25", "A25");
  }
}

module.exports = Stangg;
