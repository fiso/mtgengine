"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TideDrifter extends UnimplementedCard {
  constructor(game) {
    super(game, "Tide Drifter", "Battle for Zendikar", "BFZ");
  }
}

module.exports = TideDrifter;
