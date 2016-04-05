"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PowerstoneMinefield extends UnimplementedCard {
  constructor(game) {
    super(game, "Powerstone Minefield", "Apocalypse", "APC");
  }
}

module.exports = PowerstoneMinefield;
