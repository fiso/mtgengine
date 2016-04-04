"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Douse extends UnimplementedCard {
  constructor(game) {
    super(game, "Douse", "Urza's Saga", "USG");
  }
}

module.exports = Douse;
