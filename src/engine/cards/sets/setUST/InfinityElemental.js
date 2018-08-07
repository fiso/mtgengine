"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class InfinityElemental extends UnimplementedCard {
  constructor (game) {
    super(game, "Infinity Elemental", "Unstable", "UST");
  }
}

module.exports = InfinityElemental;
