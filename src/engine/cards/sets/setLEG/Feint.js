"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Feint extends UnimplementedCard {
  constructor (game) {
    super(game, "Feint", "Legends", "LEG");
  }
}

module.exports = Feint;
