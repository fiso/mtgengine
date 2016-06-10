"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BarbarianRing extends UnimplementedCard {
  constructor (game) {
    super(game, "Barbarian Ring", "Odyssey", "ODY");
  }
}

module.exports = BarbarianRing;
