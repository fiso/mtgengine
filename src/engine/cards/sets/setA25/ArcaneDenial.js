"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ArcaneDenial extends UnimplementedCard {
  constructor (game) {
    super(game, "Arcane Denial", "Masters 25", "A25");
  }
}

module.exports = ArcaneDenial;
