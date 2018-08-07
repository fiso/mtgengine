"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Browbeat extends UnimplementedCard {
  constructor (game) {
    super(game, "Browbeat", "Masters 25", "A25");
  }
}

module.exports = Browbeat;
