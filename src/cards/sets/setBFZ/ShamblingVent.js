"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShamblingVent extends UnimplementedCard {
  constructor (game) {
    super(game, "Shambling Vent", "Battle for Zendikar", "BFZ");
  }
}

module.exports = ShamblingVent;
