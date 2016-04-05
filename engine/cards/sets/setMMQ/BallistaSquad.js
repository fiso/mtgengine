"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BallistaSquad extends UnimplementedCard {
  constructor(game) {
    super(game, "Ballista Squad", "Mercadian Masques", "MMQ");
  }
}

module.exports = BallistaSquad;
