"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FireElemental extends UnimplementedCard {
  constructor(game) {
    super(game, "Fire Elemental", "Classic Sixth Edition", "6ED");
  }
}

module.exports = FireElemental;
