"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ManaShort extends UnimplementedCard {
  constructor(game) {
    super(game, "Mana Short", "Classic Sixth Edition", "6ED");
  }
}

module.exports = ManaShort;
