"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WarDance extends UnimplementedCard {
  constructor (game) {
    super(game, "War Dance", "Urza's Saga", "USG");
  }
}

module.exports = WarDance;
