"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EnchantedEvening extends UnimplementedCard {
  constructor (game) {
    super(game, "Enchanted Evening", "Shadowmoor", "SHM");
  }
}

module.exports = EnchantedEvening;
