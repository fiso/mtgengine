"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HiddenHerd extends UnimplementedCard {
  constructor(game) {
    super(game, "Hidden Herd", "Urza's Saga", "USG");
  }
}

module.exports = HiddenHerd;
