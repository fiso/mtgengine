"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VulshokBattlegear extends Card {
  constructor(game) {
    super(game, "Vulshok Battlegear", "Duel Decks: Venser vs. Koth", "DDI");
  }
}

module.exports = VulshokBattlegear;
