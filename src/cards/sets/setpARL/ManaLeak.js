"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ManaLeak extends UnimplementedCard {
  constructor(game) {
    super(game, "Mana Leak", "Arena League", "pARL");
  }
}

module.exports = ManaLeak;
