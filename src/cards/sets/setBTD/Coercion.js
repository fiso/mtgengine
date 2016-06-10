"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Coercion extends UnimplementedCard {
  constructor (game) {
    super(game, "Coercion", "Beatdown Box Set", "BTD");
  }
}

module.exports = Coercion;
