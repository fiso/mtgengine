"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SoulExchange extends UnimplementedCard {
  constructor (game) {
    super(game, "Soul Exchange", "Fallen Empires", "FEM");
  }
}

module.exports = SoulExchange;
