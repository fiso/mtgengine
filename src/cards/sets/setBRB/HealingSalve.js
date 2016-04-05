"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HealingSalve extends UnimplementedCard {
  constructor(game) {
    super(game, "Healing Salve", "Battle Royale Box Set", "BRB");
  }
}

module.exports = HealingSalve;
