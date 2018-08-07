"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BallistaSquad extends UnimplementedCard {
  constructor (game) {
    super(game, "Ballista Squad", "Tenth Edition", "10E");
  }
}

module.exports = BallistaSquad;
