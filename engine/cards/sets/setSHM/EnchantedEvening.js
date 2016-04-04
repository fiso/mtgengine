"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EnchantedEvening extends Card {
  constructor(game) {
    super(game, "Enchanted Evening", "Shadowmoor", "SHM");
  }
}

module.exports = EnchantedEvening;
