"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KjeldoranDead extends UnimplementedCard {
  constructor (game) {
    super(game, "Kjeldoran Dead", "Classic Sixth Edition", "6ED");
  }
}

module.exports = KjeldoranDead;
