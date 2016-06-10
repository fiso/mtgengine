"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Sunder extends UnimplementedCard {
  constructor (game) {
    super(game, "Sunder", "Urza's Saga", "USG");
  }
}

module.exports = Sunder;
