"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MishrasHelix extends UnimplementedCard {
  constructor(game) {
    super(game, "Mishra's Helix", "Urza's Saga", "USG");
  }
}

module.exports = MishrasHelix;
