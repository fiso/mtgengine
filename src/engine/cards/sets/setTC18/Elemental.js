"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Elemental extends UnimplementedCard {
  constructor (game) {
    super(game, "Elemental", "Commander 2018 Tokens", "TC18");
  }
}

module.exports = Elemental;
