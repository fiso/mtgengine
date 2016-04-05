"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ManaWeb extends UnimplementedCard {
  constructor(game) {
    super(game, "Mana Web", "Weatherlight", "WTH");
  }
}

module.exports = ManaWeb;
