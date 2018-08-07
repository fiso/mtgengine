"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ManaLeech extends UnimplementedCard {
  constructor (game) {
    super(game, "Mana Leech", "Urza's Saga", "USG");
  }
}

module.exports = ManaLeech;
