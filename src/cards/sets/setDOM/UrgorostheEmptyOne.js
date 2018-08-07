"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UrgorostheEmptyOne extends UnimplementedCard {
  constructor (game) {
    super(game, "Urgoros, the Empty One", "Dominaria", "DOM");
  }
}

module.exports = UrgorostheEmptyOne;
