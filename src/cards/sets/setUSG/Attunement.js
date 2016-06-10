"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Attunement extends UnimplementedCard {
  constructor (game) {
    super(game, "Attunement", "Urza's Saga", "USG");
  }
}

module.exports = Attunement;
