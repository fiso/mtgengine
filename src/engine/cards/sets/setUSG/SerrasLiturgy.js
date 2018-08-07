"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SerrasLiturgy extends UnimplementedCard {
  constructor (game) {
    super(game, "Serra's Liturgy", "Urza's Saga", "USG");
  }
}

module.exports = SerrasLiturgy;
