"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Fortitude extends UnimplementedCard {
  constructor (game) {
    super(game, "Fortitude", "Urza's Saga", "USG");
  }
}

module.exports = Fortitude;
