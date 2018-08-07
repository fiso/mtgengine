"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SolRing extends UnimplementedCard {
  constructor (game) {
    super(game, "Sol Ring", "Commander 2018", "C18");
  }
}

module.exports = SolRing;
