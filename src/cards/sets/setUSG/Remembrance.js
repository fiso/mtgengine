"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Remembrance extends UnimplementedCard {
  constructor(game) {
    super(game, "Remembrance", "Urza's Saga", "USG");
  }
}

module.exports = Remembrance;
