"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NaturalOrder extends UnimplementedCard {
  constructor (game) {
    super(game, "Natural Order", "Eternal Masters", "EMA");
  }
}

module.exports = NaturalOrder;
