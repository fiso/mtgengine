"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Umbilicus extends UnimplementedCard {
  constructor (game) {
    super(game, "Umbilicus", "Urza's Saga", "USG");
  }
}

module.exports = Umbilicus;
