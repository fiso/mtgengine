"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Expunge extends UnimplementedCard {
  constructor (game) {
    super(game, "Expunge", "Urza's Saga", "USG");
  }
}

module.exports = Expunge;
