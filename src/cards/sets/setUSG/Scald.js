"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Scald extends UnimplementedCard {
  constructor (game) {
    super(game, "Scald", "Urza's Saga", "USG");
  }
}

module.exports = Scald;
