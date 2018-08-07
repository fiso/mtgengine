"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SengirAutocrat extends UnimplementedCard {
  constructor (game) {
    super(game, "Sengir Autocrat", "Eternal Masters", "EMA");
  }
}

module.exports = SengirAutocrat;
