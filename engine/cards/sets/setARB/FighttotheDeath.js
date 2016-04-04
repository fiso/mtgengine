"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FighttotheDeath extends UnimplementedCard {
  constructor(game) {
    super(game, "Fight to the Death", "Alara Reborn", "ARB");
  }
}

module.exports = FighttotheDeath;
