"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Watchwolf extends UnimplementedCard {
  constructor (game) {
    super(game, "Watchwolf", "Masters 25", "A25");
  }
}

module.exports = Watchwolf;
