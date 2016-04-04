"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ManaLeak extends Card {
  constructor(game) {
    super(game, "Mana Leak", "Arena League", "pARL");
  }
}

module.exports = ManaLeak;
