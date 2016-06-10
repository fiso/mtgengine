"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Whetstone extends UnimplementedCard {
  constructor (game) {
    super(game, "Whetstone", "Urza's Saga", "USG");
  }
}

module.exports = Whetstone;
