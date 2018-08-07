"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BalothNull extends UnimplementedCard {
  constructor (game) {
    super(game, "Baloth Null", "Masters 25", "A25");
  }
}

module.exports = BalothNull;
