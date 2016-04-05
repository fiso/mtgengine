"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Breach extends UnimplementedCard {
  constructor(game) {
    super(game, "Breach", "Urza's Saga", "USG");
  }
}

module.exports = Breach;
