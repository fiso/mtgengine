"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JungleTroll extends UnimplementedCard {
  constructor (game) {
    super(game, "Jungle Troll", "Mirage", "MIR");
  }
}

module.exports = JungleTroll;
