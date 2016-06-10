"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Crosswinds extends UnimplementedCard {
  constructor (game) {
    super(game, "Crosswinds", "Urza's Saga", "USG");
  }
}

module.exports = Crosswinds;
