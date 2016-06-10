"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Retromancer extends UnimplementedCard {
  constructor (game) {
    super(game, "Retromancer", "Urza's Saga", "USG");
  }
}

module.exports = Retromancer;
