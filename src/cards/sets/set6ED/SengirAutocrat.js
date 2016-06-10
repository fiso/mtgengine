"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SengirAutocrat extends UnimplementedCard {
  constructor (game) {
    super(game, "Sengir Autocrat", "Classic Sixth Edition", "6ED");
  }
}

module.exports = SengirAutocrat;
