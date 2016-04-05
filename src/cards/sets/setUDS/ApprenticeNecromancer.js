"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ApprenticeNecromancer extends UnimplementedCard {
  constructor(game) {
    super(game, "Apprentice Necromancer", "Urza's Destiny", "UDS");
  }
}

module.exports = ApprenticeNecromancer;
