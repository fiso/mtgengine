"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SlinkingSerpent extends UnimplementedCard {
  constructor (game) {
    super(game, "Slinking Serpent", "Invasion", "INV");
  }
}

module.exports = SlinkingSerpent;
