"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Wirecat extends UnimplementedCard {
  constructor (game) {
    super(game, "Wirecat", "Urza's Saga", "USG");
  }
}

module.exports = Wirecat;
