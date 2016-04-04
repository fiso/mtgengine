"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GohamDjinn extends UnimplementedCard {
  constructor(game) {
    super(game, "Goham Djinn", "Invasion", "INV");
  }
}

module.exports = GohamDjinn;
