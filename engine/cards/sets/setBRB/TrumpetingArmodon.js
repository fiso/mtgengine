"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TrumpetingArmodon extends UnimplementedCard {
  constructor(game) {
    super(game, "Trumpeting Armodon", "Battle Royale Box Set", "BRB");
  }
}

module.exports = TrumpetingArmodon;
