"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Meltdown extends UnimplementedCard {
  constructor (game) {
    super(game, "Meltdown", "Urza's Saga", "USG");
  }
}

module.exports = Meltdown;
