"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Quicksand extends UnimplementedCard {
  constructor (game) {
    super(game, "Quicksand", "Masters 25", "A25");
  }
}

module.exports = Quicksand;
