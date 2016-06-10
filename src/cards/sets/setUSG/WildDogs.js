"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WildDogs extends UnimplementedCard {
  constructor (game) {
    super(game, "Wild Dogs", "Urza's Saga", "USG");
  }
}

module.exports = WildDogs;
