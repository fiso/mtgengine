"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TranquilGrove extends UnimplementedCard {
  constructor(game) {
    super(game, "Tranquil Grove", "Classic Sixth Edition", "6ED");
  }
}

module.exports = TranquilGrove;
